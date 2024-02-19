import React from 'react';

export default function AboutContent() {
  return (
    <section className="prose lg:prose-xl text-justify mx-auto">
      <p>
        Welcome to iBook, your ultimate destination for organizing and sharing
        vital lecture notes effortlessly. At iBook, we understand the challenges
        students face in managing their academic materials effectively, which is
        why we have developed a platform dedicated to simplifying the way you
        organize, access, and collaborate on lecture notes.
      </p>

      {/* 1st div */}
      <div>
        <h4>Our Mission</h4>
        <p>
          Our mission at iBook is to empower students worldwide by providing
          them with a seamless solution to streamline their academic lives. We
          believe that every student deserves access to tools that enhance their
          learning experience and make studying more efficient and enjoyable.
        </p>
      </div>

      {/* 2nd div */}
      <div>
        <h4>What We Offer</h4>
        <p>
          With iBook, you can bid farewell to the days of scattered notes and
          disorganized materials. Our user-friendly platform allows you to
          organize your lecture notes systematically, ensuring that you can find
          what you need when you need it. Additionally, you can seamlessly
          collaborate with classmates, study groups, and friends, enhancing your
          learning experience together.
        </p>
      </div>

      {/* 3rd div */}
      <div>
        <h4>Why Choose iBook?</h4>
        <p>
          At iBook, we prioritize user experience, reliability, security, and
          innovation. We are committed to continually improving and enhancing
          our platform to meet the evolving needs of students worldwide.
        </p>
      </div>

      <p>
        Join the iBook community today and discover a smarter way to organize
        and share your lecture notes!
      </p>
    </section>
  );
}
