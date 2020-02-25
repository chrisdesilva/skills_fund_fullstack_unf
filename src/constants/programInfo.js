import logo from "../images/logo_unf.png" // add school logo to images folder and import here

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = {
  // term details section
  interestRate36: "8.99%",
  interestRate60: "10.99%",
  APRRange36: "10.94%",
  APRRange60: "12.41%",
  interestOnly: [
    {
      // for multiple examples of interest only, add items to interestOnly array
      programName: "",
      APR36: "10.94%",
      financeCharge36: "$2,527.38",
      IOPayment36: "$77.91",
      FullMonthlyPayment36: "$330.67",
      APR60: "12.41%",
      financeCharge60: "$4,326.13",
      IOPayment60: "$95.25",
      FullMonthlyPayment60: "$226.07",
      LoanExampleAmt: "$10,000",
      LoanExampleOFeeAmt: "$400",
      LoanExampleAmtPlusOFee: "$10,400",
      programLength: "6", // program length in months
    },
  ],
  immediateRepayment: [
    {
      // for multiple examples of immmediate repayment, add items to immediateRepayment array
      programName: "PROGRAM NAME",
      APR36: "XX.XX%",
      financeCharge36: "$X,XXX.XX",
      FullMonthlyPayment36: "$XXX.XX",
      APR60: "XX.XX%",
      financeCharge60: "$X,XXX.XX",
      FullMonthlyPayment60: "$XXX.XX",
      LoanExampleAmt: "$10,000",
      LoanExampleOFeeAmt: "$400",
      LoanExampleAmtPlusOFee: "$10,400",
    },
  ],
}

export const faq = {
  // faq section
  costOfLiving: false, // true if at least one program has cost of living included
  costOfLivingPrograms: "", // leave as empty string is cost of living availability is the same across all programs
  multCostOfLivingPrograms: false, // true if costOfLivingPrograms string has more than one program
  interestOnly: true, // true if interest-only payments are an option
  immediateRepayment: false, // true if immediate repayment is an option
  multipleLoanLengths: true, // true if 36 and 60 month options are both available
  multipleLoanTypes: false, // true if both IR and IO are available
  multiPrograms: true, // only true if there are multiple programs
  onlinePrograms: false, // true if at least one program is remote/online
  schoolHQState: "WA",
  origFee: 0.04,

  // interest payment FAQ info
  interestRate36: "8.99%",
  interestRate60: "10.99%",
  APR36: "10.94%",
  APR60: "12.41%",
  IOPayment36: "$77.91",
  IOPayment60: "$95.25",

  // max loan amounts by program for faq1
  loanRange: [
    {
      programName: "The Coding Bootcamp at UNF",
      maxAmount: "$11,910",
      col: false,
      colAmount: "$6,000",
    },
    {
      programName: "Hybrid UNF Cyber Bootcamp",
      maxAmount: "$11,910",
      col: false,
      colAmount: "$6,000",
    },
  ],
}

// ***** END TERMS AND FAQ INFO *****

// ***** BEGIN GENERAL SCHOOL INFO *****

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "UNF Bootcamp"

export const schoolURL = "https://codingbootcamp.unf.edu/" // update with url of school's website

export const headline = "Transform Your Career With UNF Tech Bootcamps" // update headline as appropriate

export const leadContent = {
  header: "Your last step on the path toward changing your career",
  paragraph: `UNF Tech Bootcamps provide programs to help students build software development and cybersecurity skills on any schedule. UNF Tech Bootcamps partner with Skills Fund to offer tuition financing so more students like you can access their program.`,
}

export const threeStepCardText = {
  step1: "",
  step2: {
    header: "select your program",
    text:
      "University of North Florida partners with Fullstack Academy to provide Coding and Cyber Bootcamp programs.",
  },
  step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`,
}

export const netlifyFormName = "fullstackunf_contact"

export const GATracking = "UA-68312423-1"

export const hubspotFormId = "dae39f42-6ae9-48db-8d86-9d51af0899a8" // create Hubspot form, get form id after publishing

export const selectAProgram = "select_a_fullstackunf_program" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END GENERAL SCHOOL INFO *****

// ***** BEGIN LOAN APP AND CALC INFO *****

export const defaultLoanAmount = 10000
export const placeholder = "$10,000"
export const interestRates = {
  ir36: 8.99,
  ir60: 10.99,
}
export const moreThanSixPrograms = false // set to true if there are 7 or more programs in the loan application. True will render a dropdown menu, false will render buttons for each program.

export const programLoanInfo = [
  // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
  {
    name: "The Coding Bootcamp at UNF",
    url: "https://my.skills.fund/application?lenderCode=SKFSFL19",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 11910,
      loanTerm36: true,
      loanTerm60: true,
      "0": {
        // interest-only
        k: 8,
        apr36: 10.94,
        apr60: 12.41,
      },
      "1": null, // immediate repayment
    },
    defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: false, // true if both IR and IO are available
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 11910,
          loanTerm36: true,
          loanTerm60: true,
          "0": {
            k: 8,
            apr36: 10.94,
            apr60: 12.41,
          },
          "1": null,
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "0": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "1": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "0": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "1": null,
        },
      },
    ],
  },
  {
    name: "Hybrid UNF Cyber Bootcamp",
    url: "https://my.skills.fund/application?lenderCode=SKFSHNFCB19",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 11910,
      loanTerm36: true,
      loanTerm60: true,
      "0": {
        // interest-only
        k: 8,
        apr36: 10.94,
        apr60: 12.41,
      },
      "1": null, // immediate repayment
    },
    defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: false, // true if both IR and IO are available
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 11910,
          loanTerm36: true,
          loanTerm60: true,
          "0": {
            k: 8,
            apr36: 10.94,
            apr60: 12.41,
          },
          "1": null,
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "0": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "1": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "0": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "1": null,
        },
      },
    ],
  },
]

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText =
  "Choose the loan amount that works best for you. Borrow up to $11,910 for tuition at The Coding Bootcamp at UNF or the Hybrid UNF Cyber Bootcamp."

export const paymentTable = {
  headers: ["Program", "Tuition", "Cost of Living", "Max Total"],
  data: [
    {
      name: "PROGRAM 1",
      tuition: "$13,495",
      col: "$6,000",
      max: "$19,495",
    },
    {
      name: "PROGRAM 2",
      tuition: "$16,495",
      col: "$6,000",
      max: "$22,495",
    },
    {
      name: "PROGRAM 3",
      tuition: "$13,495",
      col: "--",
      max: "$13,495",
    },
  ],
  show: false,
}

// ***** END LOAN CALC TEXT INFO *****

// ***** Snippets for Netlify *****

// before body Hubspot

// <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3871135.js"></script>

// before head Crazyegg

// <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0076/9926.js" async="async"></script>
