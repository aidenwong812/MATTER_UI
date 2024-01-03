const getEmailsFromOwners = (owners, userData) => {
  const emails = []

  owners.forEach((owner) => {
    // Find the user that has a linked account with the given Ethereum address
    const user = userData.find((data) =>
      data.linked_accounts.some(
        (account) =>
          account.type === "wallet" && account.address.toLowerCase() === owner.toLowerCase(),
      ),
    )

    if (user) {
      // Find the email linked account for the user. Check for both 'email' and 'google_oauth' types.
      const emailAccount = user.linked_accounts.find(
        (account) => account.type === "email" || (account.type === "google_oauth" && account.email),
      )

      if (emailAccount) {
        // For 'email' type, use the 'address' property. For 'google_oauth' type, use the 'email' property.
        const emailAddress =
          emailAccount.type === "email" ? emailAccount.address : emailAccount.email
        emails.push(emailAddress)
      }
    }
  })

  return emails
}

export default getEmailsFromOwners
