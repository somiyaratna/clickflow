import { ChevronLeft, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="p-6 bg-darkbg200 text-white">
      <div className="flex mb-8 items-center gap-4">
        <Link to="/dashboard" className="text-white">
          <ChevronLeft size={32} />
        </Link>
        <Handshake size={36} />
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      </div>
      <div className="bg-darkbg100 p-6 rounded-lg shadow-md">
        <p className="mb-2">
          <strong>Definitions:</strong>
        </p>
        <p className="mb-2">
          <strong>Users Contract and these Terms & Conditions</strong>
        </p>
        <p className="mb-2">
          <strong>Rebate Charge:</strong> The fee on the user&apos;s account
          information provider webpage.
        </p>
        <p className="mb-2">
          <strong>Account Information Provider:</strong> Documents and
          information on our user&apos;s Services.
        </p>
        <p className="mb-2">
          Attached to these Terms and Conditions is the user&apos;s Contract.
        </p>
        <p className="mb-2">
          <strong>Services:</strong> The user&apos;s services we&apos;ve pledged
          to deliver for the platform, as defined in the User Contract.
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mt-6 mb-2">
            1.0 Interpretation:
          </h2>
          <p className="mb-2">
            A) Words following the terms, such as, for example, must be
            construed as illustrative and shall not restrict the meaning of the
            previous words, description, definition, phrase, or term.
          </p>
          <p className="mb-2">
            B) Unless otherwise noted, capitalized words used in these Terms and
            Conditions (but not defined in these Terms and Conditions) shall
            have the meanings provided in the User Contract.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mt-6 mb-2">
            1.2 Terms & Conditions:
          </h2>
          <p className="mb-2">
            A) These are the terms and conditions for our platform services.
            Please carefully consider these Terms & Conditions before signing
            the Agreement. These Terms and Conditions describe who we are, how
            we will provide you with our services, what to do if a problem
            develops, and other essential information. If you feel any issue
            with these terms, please submit feedback to customer service.
          </p>
          <p className="mb-2">
            B) These Terms and Conditions will govern our Agreement to exclude
            any other terms and conditions that the Application Developer(s) may
            attempt to impose, incorporate, or imply trade, custom, practice, or
            course of business.
          </p>
          <p className="mb-2">
            Note: You are jointly and severally liable for your duties and
            responsibilities under this Agreement, including your liabilities,
            if there is more than one Application Developer. This implies that
            we may pursue our rights against you for any violation of this
            Agreement by taking extra action against your conduct. We assume
            that our users will pay attention and cooperate with us.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mt-6 mb-2">
            2.0 USERS RESPONSIBILITY
          </h2>
          <p className="mb-2">
            A) Users must finish the tasks (45/50/55/60) within 24 hours to
            ensure effective boosting collecting. (The quantity of tasks depends
            on VIP level)
          </p>
          <p className="mb-2">
            B) Early termination of product boosting is NOT allowed as it would
            halt boosting collecting.
          </p>
          <p className="mb-2">
            C) Users are prohibited from posting or distributing false content
            on social media or other platforms.
          </p>
          <p className="mb-2">
            D) Each user will be randomly assigned 0-3 Merge data ratings in
            (45/50/55/60) tasks, each merge data will contain 1-3 product(s).
            (The quantity of tasks depends on VIP level)
          </p>
          <p className="mb-2">
            E) The minimum withdrawal requirement is to complete (45/50/55/60)
            tasks and a minimum withdrawal of 25 USDT or more before being
            allowed to withdraw funds. (The quantity of tasks depends on VIP
            level)
          </p>
          <p className="mb-2">
            F) Before exiting employment, each user must complete their set of
            tasks. (The quantity of tasks depends on VIP level)
          </p>
          <p className="mb-2">
            The corporation has the right to add to or amend the terms of the
            agreement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
