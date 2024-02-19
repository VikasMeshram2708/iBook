import React from 'react';

export default function PrivacyContent() {
  return (
    <section className="prose lg:prose-xl text-justify mx-auto">
      <p>
        At iBook, we are committed to protecting the privacy and security of our
        users personal information. This Privacy Policy outlines the types of
        information we collect, how we use it, and the measures we take to
        safeguard your data.
      </p>

      {/* 2nd div */}
      <div>
        <h4>Information We Collect</h4>
        <h5>
          When you use iBook, we may collect the following types of information:
        </h5>
        <ol>
          <li>
            Personal Information: When you sign up for an iBook account, we may
            collect personal information such as your name, email address, and
            password.
          </li>
          <li>
            Lecture Notes: We may collect and store the lecture notes and other
            academic materials you upload to iBook.
          </li>
          <li>
            Usage Data: We collect information about how you interact with the
            iBook platform, including your browsing activity, preferences, and
            device information.
          </li>
        </ol>
      </div>

      {/* 3rd div */}
      <div>
        <h4>How We Use Your Information</h4>
        <h5>We use the information we collect for the following purposes:</h5>
        <ol>
          <li>
            To Provide and Improve Our Services: We use your information to
            deliver the services offered by iBook and to continually improve and
            optimize our platform.
          </li>
          <li>
            To Personalize Your Experience: We may use your information to
            personalize your experience on iBook, such as providing tailored
            recommendations and content.
          </li>
          <li>
            To Communicate With You: We may use your email address to send you
            important updates, announcements, and information about your iBook
            account.
          </li>
          <li>
            To Ensure Security: We take security seriously and may use your
            information to detect, prevent, and address technical issues, fraud,
            and unauthorized access to iBook.
          </li>
        </ol>
      </div>

      {/* 4th div */}
      <div>
        <h4>Data Security</h4>
        <p>
          We employ industry-standard security measures to protect your personal
          information from unauthorized access, disclosure, alteration, or
          destruction. These measures include encryption, firewalls, and secure
          server infrastructure.
        </p>
      </div>

      {/* 5th div */}
      <div>
        <h4>Third-Party Services</h4>
        <p>
          iBook may integrate with third-party services, such as cloud storage
          providers, to enhance the functionality of our platform. Please note
          that these third-party services have their own privacy policies and
          terms of service, and we encourage you to review them before using
          their services.
        </p>
      </div>

      {/* 6th div */}
      <div>
        <h4>Your Choices</h4>
        <p>
          You have the right to access, update, or delete your personal
          information stored on iBook. You can also opt-out of receiving
          promotional emails from us by following the instructions provided in
          the email.
        </p>
      </div>

      {/* 7th div */}
      <div>
        <h4>Childrens Privacy</h4>
        <p>
          iBook is not intended for use by children under the age of 13. We do
          not knowingly collect personal information from children under the age
          of 13. If you believe that we have inadvertently collected information
          from a child under 13, please contact us immediately, and we will take
          appropriate steps to remove the information.
        </p>
      </div>

      {/* 8th div */}
      <div>
        <h4>Changes to This Privacy Policy</h4>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or applicable laws. We will notify you of any
          material changes to this Privacy Policy by posting the updated version
          on the iBook website.
        </p>
      </div>
    </section>
  );
}
