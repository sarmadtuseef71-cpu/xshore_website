# Hostinger Form Backend Setup Guide

## 1. What the form backend does
This setup provides a secure, minimal PHP backend that allows the Xshore React frontend to submit form data (via `fetch()`) directly to the server. The PHP script (`send-email.php`) securely validates the data, blocks basic spam bots, and sends a professionally formatted HTML email to `sales@xshore.ae` using the Resend API.

## 2. Files Involved
*   `public/api/send-email.php`: The main PHP endpoint that processes the POST request and communicates with Resend.
*   `public/api/config.example.php`: A placeholder configuration file demonstrating the structure for API keys.
*   `public/api/.htaccess`: Apache configuration file that secures the `api` folder on Hostinger.
*   `src/routes/contact.tsx`: The React frontend component containing the form and submission logic.

## 3. Build Step
Before deploying, compile the React application by running:
```bash
npm run build
```
*(This command bundles your React code and automatically copies the `public/api/` folder into the final `dist/` output directory).*

## 4. Upload Step
Upload the entire contents of the `dist/` directory to your Hostinger server's `public_html` directory (using the Hostinger File Manager or FTP).

## 5. Hostinger Setup
Once the files are uploaded to Hostinger:
1. Navigate to `public_html/api/` on your server.
2. Copy or rename the file `config.example.php` to exactly **`config.php`**.
3. Open `config.php` and replace the placeholder `RESEND_API_KEY_HERE` with your real, live Resend API key.
4. **CRITICAL:** Never put the Resend API key inside frontend code (React). It must only exist inside `config.php` on the server.

## 6. Resend Setup
For the API to successfully send emails, you must configure your Resend account:
*   **Verify Domain:** Ensure that the domain `xshore.ae` is fully verified in the Resend dashboard (this involves adding DNS records to your Hostinger DNS zone).
*   **Sender Address:** Ensure the `from_email` used in `config.php` exactly matches: `Xshore Website <website@xshore.ae>`.
*   **Recipient Verification:** Confirm that `sales@xshore.ae` is active and capable of receiving test emails.

## 7. Testing Steps
After the setup is complete, test the live form:
1. Open your live website and navigate to `/contact`.
2. Submit a test enquiry.
3. Confirm that the button changes to "Sending..." and the branded success message appears.
4. Check the `sales@xshore.ae` inbox. Confirm the email arrives successfully.
5. Hit "Reply" on the received email and confirm that the "Reply-To" address correctly maps to the email address you entered into the test form.

## 8. Troubleshooting
If the form fails to send or shows an error:
*   **Check config.php:** Ensure `config.php` exists in `public_html/api/` and is named correctly. If it is missing, `send-email.php` will fail safely.
*   **Check API Key:** Ensure the Resend API key is valid and pasted correctly inside quotes.
*   **Check Domain Verification:** Ensure Resend shows `xshore.ae` as a verified sending domain.
*   **Check Hostinger Logs:** Review the server's PHP error logs (accessible via Hostinger cPanel) for detailed cURL or script errors.
*   **Check Browser Network Tab:** Open Chrome/Edge Developer Tools (F12), go to the Network tab, submit the form again, and inspect the response payload for `/api/send-email.php`.

## 9. Security Notes
*   **`.htaccess` Protection:** The `config.php` file is blocked from direct web browser access by the `.htaccess` rules.
*   **No Secrets in Git:** Do not commit the live `config.php` file with real API keys into your source code repository.
*   **Honeypot:** The form includes a hidden `company_website` field. If a bot fills this out, the script silently ignores the submission, protecting your inbox from automated spam.
*   **Safe Errors:** `send-email.php` is designed to return generic errors to the website user, keeping exact system/API failures secure and visible only in server-side logs.
