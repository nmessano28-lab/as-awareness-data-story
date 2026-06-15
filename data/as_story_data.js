const storyData = {
  facts: [
    {
      value: "Before 45",
      label: "Most people develop symptoms before age 45",
      source: "NIAMS"
    },
    {
      value: "17-45",
      label: "SAA describes typical onset as late adolescence or early adulthood",
      source: "SAA"
    },
    {
      value: "6.7 yrs",
      label: "Average diagnostic delay reported in a 2021 review cited by Verywell Health",
      source: "Verywell Health"
    },
    {
      value: "No single test",
      label: "Diagnosis uses history, exam, blood work, and imaging together",
      source: "NIAMS / SAA"
    }
  ],
  onsetMarkers: [
    { age: 10, label: "childhood possible", type: "context" },
    { age: 17, label: "typical onset range begins", type: "range" },
    { age: 20, label: "Nate's symptoms began", type: "personal" },
    { age: 45, label: "most symptoms begin before this age", type: "range" }
  ],
  diagnosisJourney: [
    {
      step: "Pain starts",
      commonBarrier: "Feels like a strain, posture issue, or ordinary back/neck pain",
      systemNeed: "Recognize inflammatory patterns: persistent pain, stiffness, worse after rest"
    },
    {
      step: "First visits",
      commonBarrier: "Primary care or urgent care may focus on mechanical pain first",
      systemNeed: "Ask about duration, morning stiffness, night pain, family history, and other symptoms"
    },
    {
      step: "Detours",
      commonBarrier: "Chiropractic, orthopedics, or physical therapy may help symptoms without explaining cause",
      systemNeed: "Consider rheumatology when symptoms persist or do not match mechanical injury"
    },
    {
      step: "Rheumatology",
      commonBarrier: "Many people do not know this specialty is relevant to spine inflammation",
      systemNeed: "Specialist evaluation can combine history, exam, labs, and imaging"
    },
    {
      step: "Management",
      commonBarrier: "AS has no cure, but symptoms can be managed",
      systemNeed: "Treatment, movement, monitoring, and patient education can support quality of life"
    }
  ],
  symptomAreas: [
    {
      id: "spine",
      label: "Spine / SI joints",
      intensity: 5,
      summary: "Lower back or hip pain and stiffness are common, often worse after rest and improved by movement.",
      source: "NIAMS"
    },
    {
      id: "fatigue",
      label: "Fatigue",
      intensity: 4,
      summary: "Fatigue can be part of the inflammatory burden and may not be visible to others.",
      source: "NIAMS"
    },
    {
      id: "eyes",
      label: "Eyes",
      intensity: 3,
      summary: "Some people develop uveitis, which can cause eye pain or vision changes.",
      source: "NIAMS / SAA"
    },
    {
      id: "mobility",
      label: "Mobility",
      intensity: 4,
      summary: "Inflammation and stiffness can reduce flexibility and daily movement over time.",
      source: "NIAMS"
    },
    {
      id: "other-joints",
      label: "Other joints",
      intensity: 3,
      summary: "Pain, stiffness, and inflammation may also affect ribs, shoulders, knees, hips, or feet.",
      source: "NIAMS / SAA"
    },
    {
      id: "gut-skin",
      label: "Gut / skin links",
      intensity: 2,
      summary: "AS can be associated with inflammatory bowel disease or psoriasis in some people.",
      source: "NIAMS"
    }
  ],
  invisibleBurden: [
    { visible: "Looks fine", hidden: "Pain can be worse after sitting, sleeping, or staying still" },
    { visible: "Young adult", hidden: "Symptoms often begin long before people expect chronic arthritis" },
    { visible: "Back pain", hidden: "Inflammation can involve spine, SI joints, eyes, ribs, hips, and fatigue" },
    { visible: "Many appointments", hidden: "Diagnosis may require a specialist and several kinds of evidence" }
  ],
  sources: [
    {
      name: "National Institute of Arthritis and Musculoskeletal and Skin Diseases (NIAMS)",
      title: "Ankylosing Spondylitis",
      url: "https://www.niams.nih.gov/health-topics/ankylosing-spondylitis"
    },
    {
      name: "Spondylitis Association of America",
      title: "Overview of Ankylosing Spondylitis",
      url: "https://spondylitis.org/about-spondylitis/overview-of-spondyloarthritis/ankylosing-spondylitis/"
    },
    {
      name: "Verywell Health",
      title: "Does Axial Spondyloarthritis Show Up on an MRI?",
      url: "https://www.verywellhealth.com/axial-spondyloarthritis-mri-6891377"
    },
    {
      name: "Arthritis Care & Research",
      title: "Measures of symptoms and disease status in ankylosing spondylitis",
      url: "https://pubmed.ncbi.nlm.nih.gov/22588772/"
    }
  ]
};
