import { CONTACT_EMAIL } from '@/lib/constants';

export default function DeleteAccountContent() {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Delete Your Prime Coach Account</h1>
      <p className="text-prime-text-subtle text-sm mb-6">Prime Coach (Android package: com.fadi.myapp) &mdash; Account Deletion Request</p>

      {/* Warning */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-8">
        <p className="text-amber-400 font-medium">
          <strong>Important:</strong> Deleting your account is permanent and cannot be undone. All your data will be permanently deleted.
        </p>
      </div>

      <Section title="What Gets Deleted?">
        <p>When you delete your account, the following data will be permanently removed:</p>
        <ul>
          <li>Your user profile and account information</li>
          <li>All workout plans and exercise history</li>
          <li>All nutrition plans and meal tracking data</li>
          <li>All progress photos and measurements</li>
          <li>All scanned food items and nutrition logs</li>
          <li>All chat conversations with the AI coach</li>
          <li>All badges, streaks, and achievements</li>
          <li>All app settings and preferences</li>
        </ul>
      </Section>

      <Section title="Data Retention">
        <div className="bg-prime-accent/10 border-l-4 border-prime-accent p-4 rounded-r-lg mb-3">
          <p className="text-prime-accent"><strong>In-app deletion (Method 1):</strong> When you delete your account from the app, your account and all associated data are permanently removed immediately.</p>
        </div>
        <p><strong className="text-white">Email request (Method 2):</strong> We process deletion requests within 5 business days. After processing, all data is permanently and irreversibly deleted from our systems.</p>
      </Section>

      <Section title="How to Delete Your Account">
        <div className="bg-prime-surface-muted rounded-xl p-5 mb-4">
          <h3 className="text-prime-accent font-semibold mb-3">Method 1: Delete from the App (Recommended)</h3>
          <ol className="list-decimal ml-5 space-y-2">
            <li>Open the Prime Coach app on your device</li>
            <li>Go to <strong className="text-white">Settings</strong> (gear icon)</li>
            <li>Under Account, scroll down and tap <strong className="text-white">&quot;Delete account&quot;</strong></li>
            <li>Confirm your deletion in the dialog</li>
            <li>Your account and all data will be permanently removed immediately</li>
          </ol>
        </div>

        <div className="bg-prime-surface-muted rounded-xl p-5">
          <h3 className="text-prime-accent font-semibold mb-3">Method 2: Request via Email</h3>
          <p>If you&apos;re unable to access the app, you can request account deletion by emailing us:</p>
          <p className="mt-2"><strong className="text-white">Email:</strong>{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-prime-accent hover:underline">{CONTACT_EMAIL}</a>
          </p>
          <p className="mt-2">Please include the following in your email:</p>
          <ul className="list-disc ml-5 space-y-1 mt-2">
            <li>Your account email address</li>
            <li>Subject line: &quot;Account Deletion Request&quot;</li>
            <li>Confirmation that you want to delete your account</li>
          </ul>
          <p className="mt-2">We&apos;ll process your request within 5 business days and send you a confirmation email.</p>
        </div>
      </Section>

      <Section title="Before You Delete">
        <p>Before proceeding, please consider:</p>
        <ul>
          <li>Export any data you want to keep (workout plans, progress photos, etc.)</li>
          <li>Cancel any active subscriptions (if applicable)</li>
          <li>Download any receipts or important information</li>
        </ul>
        <p>Once deleted, we cannot recover your data.</p>
      </Section>

      <Section title="Questions or Concerns?">
        <p>If you have questions about account deletion or data privacy, please contact us:</p>
        <p><strong className="text-white">Email:</strong>{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-prime-accent hover:underline">{CONTACT_EMAIL}</a>
        </p>
      </Section>

      <Section title="App and Developer Information">
        <ul>
          <li><strong className="text-white">App name:</strong> Prime Coach</li>
          <li><strong className="text-white">Android application ID:</strong> com.fadi.myapp</li>
          <li><strong className="text-white">Support email:</strong>{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-prime-accent hover:underline">{CONTACT_EMAIL}</a>
          </li>
        </ul>
        <p className="mt-2">This page is the official account deletion page for Prime Coach on Google Play.</p>
      </Section>
    </>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-prime-accent border-b border-prime-border-strong pb-2 mb-4">{title}</h2>
      <div className="space-y-3 text-prime-text-muted leading-relaxed [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:space-y-1 [&_li]:text-prime-text-muted [&_ol]:text-prime-text-muted">
        {children}
      </div>
    </div>
  );
}
