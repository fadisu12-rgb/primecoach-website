import Link from 'next/link';
import { CONTACT_EMAIL } from '@/lib/constants';
import { getLocalePath } from '@/lib/i18n';

export default function PrivacyContent({ locale }) {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-prime-text-subtle text-sm mb-8">PrimeCoach &middot; Last updated: February 2025</p>

      <p className="text-prime-text-muted leading-relaxed mb-6">
        This Privacy Policy describes how PrimeCoach (&quot;we&quot;, &quot;our&quot;, or &quot;the app&quot;) collects, uses, and shares your information when you use our mobile application and related services.
      </p>

      <Section title="1. Information We Collect">
        <p><strong className="text-white">Account information:</strong> When you sign up (email/password, Google, or Apple), we collect your email address, name (if provided), and account credentials necessary to provide the service.</p>
        <p><strong className="text-white">Fitness and health-related data:</strong> To provide personalized coaching, we collect and store data you enter in the app, such as:</p>
        <ul>
          <li>Questionnaire answers (goals, fitness level, dietary preferences, etc.)</li>
          <li>Meals, nutrition logs, and calorie/macro data</li>
          <li>Workout and exercise logs (lifting, cardio)</li>
          <li>Weight and progress reports</li>
          <li>Streaks, badges, and activity history</li>
        </ul>
        <p><strong className="text-white">Photos (camera):</strong> If you use the food-scanning feature, we may process images of food to identify items and estimate nutrition. Images may be sent to our servers or third-party services for analysis; we do not use them for advertising or other purposes beyond the feature.</p>
        <p><strong className="text-white">Device and app usage:</strong> We may collect device type, OS version, app version, and language preference to support and improve the app. If you enable push notifications, we store a token to send you reminders and updates.</p>
      </Section>

      <Section title="2. How We Use Your Information">
        <p>We use your data to:</p>
        <ul>
          <li>Create and manage your account</li>
          <li>Generate and personalize your nutrition, lifting, and cardio plans</li>
          <li>Provide AI-based coaching and plan modifications via chat</li>
          <li>Track meals, exercises, and progress</li>
          <li>Send push notifications (reminders, plan updates) if you opt in</li>
          <li>Respond to support requests and improve the service</li>
        </ul>
      </Section>

      <Section title="3. Data Sharing">
        <p>We do not sell your personal data. We may share data only:</p>
        <ul>
          <li>With service providers that help us run the app (e.g. hosting, analytics, push notifications), under strict agreements</li>
          <li>When required by law or to protect our rights and safety</li>
        </ul>
        <p>Subscription payments are processed by Google Play (or Apple App Store on iOS); we do not store your full payment details.</p>
      </Section>

      <Section title="4. Data Retention and Security">
        <p>We retain your data for as long as your account is active. After account deletion, we delete or anonymize your data within 30 days, except where we must keep it for legal or safety reasons. We use industry-standard measures to protect your data in transit and at rest.</p>
      </Section>

      <Section title="5. Your Rights">
        <p>Depending on your location, you may have the right to access, correct, or delete your data, or to object to or restrict certain processing. You can:</p>
        <ul>
          <li>Request account deletion at any time: <Link href={getLocalePath(locale, 'delete-account')} className="text-prime-accent hover:underline">Delete my account</Link></li>
          <li>Contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-prime-accent hover:underline">{CONTACT_EMAIL}</a> for any privacy request</li>
        </ul>
      </Section>

      <Section title="6. Children">
        <p>Our service is not directed at children under 13. We do not knowingly collect data from children under 13. If you believe we have collected such data, please contact us and we will delete it.</p>
      </Section>

      <Section title="7. Changes to This Policy">
        <p>We may update this Privacy Policy from time to time. We will post the updated version with a new &quot;Last updated&quot; date. Continued use of the app after changes means you accept the updated policy.</p>
      </Section>

      <Section title="8. Contact Us">
        <p>For privacy questions or requests:</p>
        <p>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-prime-accent hover:underline">{CONTACT_EMAIL}</a></p>
        <p><Link href={getLocalePath(locale, 'delete-account')} className="text-prime-accent hover:underline">Account deletion instructions</Link></p>
      </Section>
    </>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-prime-accent border-b border-prime-border-strong pb-2 mb-4">{title}</h2>
      <div className="space-y-3 text-prime-text-muted leading-relaxed [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:space-y-1 [&_li]:text-prime-text-muted">
        {children}
      </div>
    </div>
  );
}
