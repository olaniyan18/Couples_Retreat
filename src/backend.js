/** @format */

import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { reference, amount } = req.body;

  try {
    // 1. Authenticate with Barclays API
    const tokenRes = await axios.post("https://api.barclays.com/token", {
      grant_type: "client_credentials",
      client_id: process.env.BARCLAYS_CLIENT_ID,
      client_secret: process.env.BARCLAYS_CLIENT_SECRET,
    });

    const accessToken = tokenRes.data.access_token;

    // 2. Fetch transactions
    const txRes = await axios.get(
      "https://api.barclays.com/open-banking/v3.1/aisp/accounts/{accountId}/transactions",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const transactions = txRes.data.Data.Transaction;

    // 3. Match payment
    const match = transactions.find(
      (tx) =>
        tx.TransactionInformation?.includes(reference) &&
        parseFloat(tx.Amount.Amount) === parseFloat(amount)
    );

    res.json({ confirmed: !!match, transaction: match || null });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Bank API error" });
  }
}
