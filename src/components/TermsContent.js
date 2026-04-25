import Link from 'next/link';
import { CONTACT_EMAIL } from '@/lib/constants';
import { getLocalePath } from '@/lib/i18n';

export default function TermsContent({ locale }) {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Terms of Service</h1>
      <p className="text-prime-text-subtle text-sm mb-8">PrimeCoach &middot; Last updated: February 2025</p>

      <p className="text-prime-text-muted leading-relaxed mb-6">
        Welcome to PrimeCoach. By downloading, accessing, or using the PrimeCoach mobile application and related services (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, do not use the Service.
      </p>

      <Section title="1. Description of Service">
        <p>PrimeCoach is a fitness and nutrition coaching application that provides personalized meal plans, workout plans (lifting and cardio), progress tracking, and AI-assisted plan modifications. The Service is for general fitness and wellness purposes only.</p>
        <div className="bg-prime-error/10 border-l-4 border-prime-error p-4 rounded-r-lg my-4">
          <p><strong className="text-white">Not Medical or Professional Advice.</strong> The Service does not provide medical, nutritional, or professional fitness advice. Content and plans are for informational and motivational purposes only. Always consult a qualified healthcare provider before starting any diet or exercise program, especially if you have health conditions, are pregnant, or take medication.</p>
        </div>
      </Section>

      <Section title="2. Eligibility">
        <p>You must be at least 13 years of age (or the minimum age in your jurisdiction) to use the Service. If you are under 18, you should have parental or guardian consent. By using the Service, you represent that you meet these requirements.</p>
      </Section>

      <Section title="3. Account and Registration">
        <p>You may need to create an account (e.g. email/password, Google, or Apple sign-in). You are responsible for keeping your credentials secure and for all activity under your account. You must provide accurate information and update it as needed. We may suspend or terminate accounts that violate these Terms or for other reasons at our discretion.</p>
      </Section>

      <Section title="4. Subscriptions and Payments">
        <p>Access to certain features may require a paid subscription. Subscription terms (duration, price, renewal) are shown in the app and at the time of purchase.</p>
        <ul>
          <li><strong className="text-white">Billing:</strong> Payments are processed by the Apple App Store or Google Play Store. You agree to their respective payment terms and conditions.</li>
          <li><strong className="text-white">Renewal:</strong> Subscriptions may renew automatically unless you cancel before the end of the current period. You can manage or cancel subscriptions in your device&apos;s App Store or Play Store account settings.</li>
          <li><strong className="text-white">Refunds:</strong> Refund requests are handled by Apple or Google in accordance with their policies. We do not control refund decisions. Contact Apple or Google support for refund requests.</li>
          <li><strong className="text-white">Price changes:</strong> We may change subscription prices with notice. Continued use after a price change constitutes acceptance.</li>
        </ul>
      </Section>

      <Section title="5. Acceptable Use">
        <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You may not:</p>
        <ul>
          <li>Use the Service in any way that violates applicable laws or regulations</li>
          <li>Share your account or allow others to access the Service through your account</li>
          <li>Reverse engineer, decompile, or attempt to extract source code from the app</li>
          <li>Use automated means (bots, scrapers) to access the Service without permission</li>
          <li>Upload or transmit viruses, malware, or other harmful content</li>
          <li>Impersonate others or misrepresent your identity</li>
        </ul>
        <p>We may suspend or terminate your access if we believe you have violated these Terms.</p>
      </Section>

      <Section title="6. Intellectual Property">
        <p>The Service, including the app, design, text, graphics, logos, and software (excluding user-generated content), is owned by us or our licensors and is protected by copyright and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our written permission. You retain ownership of content you submit; you grant us a license to use, store, and process it to provide and improve the Service.</p>
      </Section>

      <Section title="7. Disclaimers">
        <p className="uppercase text-xs tracking-wide"><strong className="text-white">THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.</strong> We do not warrant that the Service will be uninterrupted, error-free, or free of harmful components. We are not liable for any injuries, losses, or damages arising from your use of the Service, including from following any meal or workout plans. You use the Service at your own risk.</p>
      </Section>

      <Section title="8. Limitation of Liability">
        <p className="uppercase text-xs tracking-wide">TO THE MAXIMUM EXTENT PERMITTED BY LAW, PRIMECOACH AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE. OUR TOTAL LIABILITY FOR ANY CLAIMS RELATED TO THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS BEFORE THE CLAIM. Some jurisdictions do not allow certain limitations; in such cases, our liability will be limited to the maximum permitted by law.</p>
      </Section>

      <Section title="9. Indemnification">
        <p>You agree to indemnify and hold harmless PrimeCoach and its affiliates, officers, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from your use of the Service, your violation of these Terms, or your violation of any third-party rights.</p>
      </Section>

      <Section title="10. Privacy">
        <p>Your use of the Service is also governed by our <Link href={getLocalePath(locale, 'privacy-policy')} className="text-prime-accent hover:underline">Privacy Policy</Link>, which describes how we collect, use, and protect your information. By using the Service, you consent to the practices described in the Privacy Policy.</p>
      </Section>

      <Section title="11. Account Deletion">
        <p>You may delete your account at any time. For instructions and what happens to your data, see our <Link href={getLocalePath(locale, 'delete-account')} className="text-prime-accent hover:underline">Account Deletion</Link> page. Upon deletion, your right to use the Service ends immediately.</p>
      </Section>

      <Section title="12. Changes to the Service and Terms">
        <p>We may modify the Service or these Terms at any time. We will indicate changes to the Terms by updating the &quot;Last updated&quot; date. Your continued use of the Service after changes constitutes acceptance of the revised Terms. If you do not agree, you must stop using the Service and may delete your account.</p>
      </Section>

      <Section title="13. General">
        <p><strong className="text-white">Governing law:</strong> These Terms are governed by the laws of the jurisdiction in which we operate, without regard to conflict-of-law principles.</p>
        <p><strong className="text-white">Disputes:</strong> Any dispute arising from these Terms or the Service shall be resolved through binding arbitration or in the courts of that jurisdiction, as applicable.</p>
        <p><strong className="text-white">Severability:</strong> If any provision of these Terms is held invalid, the remaining provisions remain in effect.</p>
        <p><strong className="text-white">Entire agreement:</strong> These Terms, together with the Privacy Policy and any in-app terms, constitute the entire agreement between you and PrimeCoach regarding the Service.</p>
      </Section>

      <Section title="14. Contact Us">
        <p>For questions about these Terms of Service:</p>
        <p>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-prime-accent hover:underline">{CONTACT_EMAIL}</a></p>
        <p>
          <Link href={getLocalePath(locale, 'privacy-policy')} className="text-prime-accent hover:underline">Privacy Policy</Link>
          {' '}&middot;{' '}
          <Link href={getLocalePath(locale, 'delete-account')} className="text-prime-accent hover:underline">Delete account</Link>
        </p>
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
