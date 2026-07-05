import type { CourseData } from '../components/CoursePageTemplate'

export const psvarCourse: CourseData = {
  title: 'PSVAR Training',
  subtitle: 'Public Service Vehicles Accessibility Regulations — Operator & Driver Compliance',
  description: 'Comprehensive training on the Public Service Vehicles Accessibility Regulations 2000 and PSVAIR 2023.',
  seoDescription: 'PSVAR training for bus and coach operators and drivers. Understand your legal obligations under the Public Service Vehicles Accessibility Regulations 2000 and PSVAIR 2023. Delivered nationwide.',
  canonical: '/courses/psvar-training',
  duration: 'Half Day / Full Day',
  audience: [
    'PSV operators and transport managers',
    'Bus and coach drivers',
    'Fleet compliance officers',
    'Operations managers',
    'Traffic commissioners\' representatives',
    'Local authority transport teams',
  ],
  overview: `The Public Service Vehicles Accessibility Regulations 2000 (PSVAR) are the cornerstone of accessible transport law in the UK. They set out mandatory technical standards for buses and coaches carrying more than 22 passengers on local or scheduled services, covering wheelchair spaces, ramps, lifts, priority seating, handrails, audio-visual information and much more. Failure to comply is a criminal offence under the Equality Act 2010 and can result in prosecution, fines, and intervention by the Traffic Commissioner — placing your operator licence at risk.

Building on PSVAR, the Public Service Vehicles (Accessible Information) Regulations 2023 (PSVAIR) require operators of local bus and coach services to provide audible and visible next-stop announcements and route information. Compliance is being phased in between 2024 and 2026 depending on vehicle age, and DVSA enforcement is active.

This course cuts through the complexity of the legislation and translates it into practical, actionable knowledge for operators and drivers. We explain not just what the law says, but why it exists, how it protects vulnerable passengers, and what you need to do to demonstrate compliance during a DVSA inspection or Traffic Commissioner inquiry.`,
  outcomes: [
    'Explain the full scope and requirements of PSVAR 2000 and PSVAIR 2023',
    'Identify which vehicles are covered and which exemptions apply',
    'Describe the specific technical requirements for wheelchair spaces, ramps, lifts, priority seating and accessible information',
    'Understand the phased PSVAIR compliance timeline and which vehicles must comply by which date',
    'Explain operator responsibilities for maintaining accessibility equipment in working order',
    'Describe driver duties under the Conduct Regulations and PSVAR',
    'Prepare for a DVSA accessibility inspection with confidence',
    'Understand the consequences of non-compliance, including criminal prosecution and licence risk',
    'Apply best practice from the DfT Inclusive Transport Strategy and CPT guidance',
  ],
  operatorBenefits: [
    'Reduces risk of DVSA enforcement action and prosecution',
    'Protects the operator licence from Traffic Commissioner intervention',
    'Demonstrates a proactive compliance culture to regulators',
    'Reduces the risk of Equality Act discrimination claims',
    'Improves fleet readiness for accessibility inspections',
    'Supports the DfT\'s Inclusive Transport Strategy objectives',
  ],
  driverBenefits: [
    'Clear understanding of legal duties without legal jargon',
    'Confidence to operate accessibility equipment correctly',
    'Knowledge of when and how to assist disabled passengers',
    'Reduced anxiety around compliance and inspections',
    'Protection from personal liability through proper procedure',
  ],
  legalContext: `Under PSVAR 2000, it is a criminal offence for an operator to use a non-compliant vehicle on a regulated service. The Equality Act 2010 Section 165 imposes specific duties on drivers of designated wheelchair-accessible vehicles to carry passengers in wheelchairs, provide assistance and not charge extra. Non-compliance can result in fines, prosecution, and referral to the Traffic Commissioner, who has the power to suspend or revoke an operator licence. The DVSA conducts roadside and depot inspections and can issue prohibition notices for non-compliant vehicles.`,
  practicalContent: [
    'Identifying PSVAR-compliant and non-compliant vehicles in a fleet context',
    'Inspecting ramps, lifts and restraint systems for compliance',
    'Reviewing PSVAIR audio-visual information system requirements',
    'Completing a mock DVSA accessibility inspection checklist',
    'Case study analysis: real-world enforcement outcomes and lessons learned',
    'Developing an operator compliance action plan',
  ],
  faqs: [
    { q: 'Does PSVAR apply to all buses and coaches?', a: 'PSVAR applies to public service vehicles carrying more than 22 passengers used on local or scheduled services in Great Britain. Vehicles used on private hire or carrying 22 or fewer passengers are generally exempt, though the Equality Act\'s reasonable adjustments duty still applies.' },
    { q: 'What is the deadline for PSVAIR compliance?', a: 'PSVAIR 2023 is being phased in. New vehicles registered from 1 October 2024 must comply immediately. Existing vehicles have until 1 October 2026 (buses) or 1 August 2026 (coaches used on home-to-school or rail replacement services) to comply.' },
    { q: 'What happens if our vehicle fails a DVSA inspection?', a: 'A DVSA inspector can issue a prohibition notice preventing the vehicle from being used until defects are rectified. Serious or repeated non-compliance can be referred to the Traffic Commissioner, potentially resulting in licence action.' },
    { q: 'Can we deliver this training at our depot?', a: 'Yes. We offer on-site delivery at your depot or operating centre across England, Scotland and Wales. This is often the most cost-effective option for larger fleets and allows training to be tailored to your specific vehicles and routes.' },
    { q: 'Is this course suitable for transport managers as well as drivers?', a: 'Absolutely. The course has been designed to be valuable at all levels. We offer separate modules for operational managers focusing on compliance management, and driver-focused sessions covering practical duties and procedures.' },
  ],
  relatedCourses: [
    { to: '/courses/accessibility-inspection', label: 'Accessibility Inspection & Compliance' },
    { to: '/courses/wheelchair-passenger-safety', label: 'Wheelchair Passenger Safety' },
    { to: '/courses/equality-act', label: 'Equality Act & Accessible Transport' },
    { to: '/courses/disability-awareness', label: 'Disability Awareness' },
  ],
}

export const accessibilityInspectionCourse: CourseData = {
  title: 'Passenger Accessibility Inspection & Compliance',
  subtitle: 'Preparing Your Fleet and Operations for DVSA Accessibility Inspections',
  description: 'Practical training on accessibility inspection readiness, DVSA compliance checks and fleet management best practice.',
  seoDescription: 'Passenger accessibility inspection and compliance training for UK bus and coach operators. Prepare for DVSA inspections, understand PSVAR requirements and build a robust compliance culture.',
  canonical: '/courses/accessibility-inspection',
  duration: 'Full Day',
  audience: [
    'Transport managers and operations directors',
    'Fleet compliance officers',
    'Engineering and maintenance managers',
    'PSV operators subject to DVSA inspection',
    'Local authority transport commissioners',
  ],
  overview: `Accessibility compliance is not a one-off event — it is an ongoing operational responsibility. The DVSA conducts targeted accessibility inspections at the roadside and at depots, checking that vehicles meet PSVAR 2000 requirements and that drivers understand their duties. An unprepared operator can face prohibition notices, prosecution and, in serious cases, a Traffic Commissioner public inquiry that puts the operator licence at risk.

This full-day course takes a practical, systems-based approach to accessibility compliance. We work through every element of a DVSA accessibility inspection — from wheelchair space dimensions and ramp deployment to audio-visual information systems and driver knowledge — and help you build the internal processes, documentation and training culture that demonstrate genuine compliance rather than mere box-ticking.

Participants leave with a clear action plan, a suite of inspection-ready checklists, and the knowledge to manage accessibility compliance as a core part of their safety management system.`,
  outcomes: [
    'Understand the full scope of a DVSA accessibility inspection and what inspectors look for',
    'Conduct an internal pre-inspection audit of vehicles against PSVAR requirements',
    'Identify common compliance failures and how to prevent them',
    'Develop and implement an accessibility compliance management system',
    'Create and maintain appropriate documentation and records',
    'Brief drivers on their duties and ensure they can demonstrate compliance',
    'Understand the PSVAIR 2023 audio-visual information requirements and compliance timeline',
    'Respond effectively to a prohibition notice or Traffic Commissioner inquiry',
  ],
  operatorBenefits: [
    'Significantly reduces the risk of prohibition notices and prosecution',
    'Builds a documented compliance trail that protects the operator licence',
    'Identifies and resolves compliance gaps before a DVSA inspection',
    'Reduces insurance and liability exposure',
    'Demonstrates commitment to accessible transport to commissioners and local authorities',
    'Supports tender and contract compliance requirements',
  ],
  driverBenefits: [
    'Clear, practical knowledge of what inspectors check and why',
    'Confidence to operate and demonstrate accessibility equipment',
    'Understanding of personal legal duties under PSVAR and the Equality Act',
    'Ability to complete pre-departure accessibility checks correctly',
  ],
  legalContext: `PSVAR 2000 makes it a criminal offence to operate a non-compliant vehicle on a regulated service. The DVSA has powers to issue immediate prohibition notices and refer operators to the Traffic Commissioner. Under the operator licence system, a Traffic Commissioner can suspend, curtail or revoke a licence where there is evidence of systemic non-compliance. The Equality Act 2010 also exposes operators to civil claims from disabled passengers where reasonable adjustments have not been made.`,
  practicalContent: [
    'Conducting a full mock DVSA accessibility inspection using official checklists',
    'Physical inspection of ramps, lifts, wheelchair restraints and priority seating',
    'Reviewing and completing driver pre-departure accessibility check sheets',
    'Developing a fleet accessibility compliance register',
    'Workshop: identifying and documenting compliance gaps',
    'Creating a corrective action plan and monitoring process',
  ],
  faqs: [
    { q: 'How often does the DVSA inspect for accessibility compliance?', a: 'The DVSA conducts targeted accessibility inspections as part of its broader enforcement activity. Operators on local and scheduled services are most at risk. The frequency increases following complaints or previous non-compliance findings.' },
    { q: 'What documentation should we have ready for an inspection?', a: 'Inspectors will want to see maintenance records for accessibility equipment (ramps, lifts, restraints), driver training records, pre-departure check sheets, and evidence of how you manage defects. This course helps you build and maintain all of these.' },
    { q: 'Our vehicles are PSVAR-certified — does that mean we\'re compliant?', a: 'Type approval confirms the vehicle was compliant when manufactured, but ongoing compliance requires that equipment is maintained in working order and that drivers know how to use it. Worn, damaged or inoperable ramps and lifts are a common inspection failure.' },
    { q: 'Can this training count towards our operator CPC obligations?', a: 'This course is designed to complement your CPC obligations and can be recorded as part of your continuous professional development programme. Please contact us to discuss formal accreditation options.' },
  ],
  relatedCourses: [
    { to: '/courses/psvar-training', label: 'PSVAR Training' },
    { to: '/courses/wheelchair-passenger-safety', label: 'Wheelchair Passenger Safety' },
    { to: '/courses/corporate-training', label: 'Corporate Training Packages' },
  ],
}

export const wheelchairSafetyCourse: CourseData = {
  title: 'Wheelchair Passenger Safety',
  subtitle: 'Safe Loading, Unloading, Restraint Systems and Passenger Care for Bus and Coach Drivers',
  description: 'Comprehensive practical training on the safe transportation of wheelchair users, including loading and unloading procedures, ramp and lift operation, restraint systems and emergency procedures.',
  seoDescription: 'Wheelchair passenger safety training for bus and coach drivers. Covers safe loading and unloading, ramp and lift operation, wheelchair restraint systems (WTORS), passenger communication and emergency procedures. Nationwide delivery.',
  canonical: '/courses/wheelchair-passenger-safety',
  duration: 'Full Day (Practical)',
  audience: [
    'Bus and coach drivers',
    'Community transport drivers',
    'School and college transport drivers',
    'Minibus drivers carrying wheelchair users',
    'Transport supervisors and trainers',
  ],
  overview: `Transporting wheelchair users safely is one of the most critical responsibilities a driver can have. A wheelchair user who is incorrectly loaded, positioned or restrained is at serious risk of injury — and the driver and operator can face criminal prosecution, civil liability and licence action as a result.

Despite this, research by Transport for All found that 28% of disabled passengers experienced problems with ramps, and 41% reported negative attitudes and behaviours from drivers. These are not just customer service failures — they are compliance failures with real legal consequences.

This intensive, practical full-day course gives drivers the knowledge, skills and confidence to transport wheelchair users safely and professionally. We cover every stage of the journey, from initial approach and communication through to safe loading, correct restraint, the journey itself, unloading and emergency procedures. Training is delivered using real vehicles and equipment, ensuring skills are directly transferable to the workplace.`,
  outcomes: [
    'Approach and communicate with wheelchair users in a respectful, professional manner',
    'Conduct a pre-boarding risk assessment for each wheelchair user',
    'Safely deploy and operate manual and powered ramps and wheelchair lifts',
    'Position and secure a wheelchair correctly in the designated wheelchair space',
    'Apply a 4-point wheelchair tie-down and occupant restraint system (WTORS) correctly',
    'Understand when a wheelchair or mobility aid cannot be safely transported and how to handle this sensitively',
    'Manage the wheelchair space when other passengers are present',
    'Safely unload a wheelchair user at the destination',
    'Follow correct emergency evacuation procedures for wheelchair users',
    'Complete a post-journey check and report defects in accessibility equipment',
  ],
  operatorBenefits: [
    'Significantly reduces the risk of passenger injury and associated liability claims',
    'Demonstrates compliance with PSVAR 2000 and the Equality Act 2010',
    'Reduces the risk of DVSA enforcement action and Traffic Commissioner intervention',
    'Improves customer satisfaction scores and reduces complaints',
    'Supports contract compliance for local authority and school transport services',
    'Builds a documented training record that protects the operator in the event of an incident',
  ],
  driverBenefits: [
    'Genuine confidence in handling all types of wheelchair and mobility equipment',
    'Clear, step-by-step procedures that remove uncertainty and reduce stress',
    'Knowledge of personal legal duties and how to fulfil them',
    'Skills to communicate effectively with wheelchair users and their carers',
    'Ability to manage challenging situations, such as refused access or equipment failure, professionally',
  ],
  legalContext: `Under the Equality Act 2010 Section 165, drivers of designated wheelchair-accessible vehicles must carry wheelchair users, provide reasonable assistance, and not charge extra. PSVAR 2000 requires vehicles to have compliant wheelchair spaces and restraint systems. Failure to secure a wheelchair user correctly can constitute a criminal offence under road traffic law and expose the operator to civil liability. The Highway Code and DVSA guidance both emphasise that all passengers must be appropriately restrained.`,
  practicalContent: [
    'Hands-on ramp deployment and stowage — manual and powered systems',
    'Wheelchair lift operation: pre-use checks, safe operation and emergency procedures',
    'Practical application of 4-point tie-down WTORS on a range of wheelchair types',
    'Occupant restraint: fitting lap and shoulder belts correctly',
    'Positioning and securing powered wheelchairs and scooters (where applicable)',
    'Scenario training: managing a refused access situation sensitively',
    'Emergency evacuation drill: removing a wheelchair user from a vehicle safely',
    'Equipment defect identification and reporting procedures',
    'Communication skills workshop: interacting with disabled passengers',
  ],
  faqs: [
    { q: 'What types of wheelchair does this training cover?', a: 'The course covers manual wheelchairs, powered wheelchairs and, where relevant, mobility scooters. We use a range of equipment during practical sessions to ensure drivers are prepared for the variety of mobility aids they will encounter in service.' },
    { q: 'What is a 4-point tie-down system and why is it important?', a: 'A 4-point tie-down (WTORS) secures the wheelchair at four anchor points — two at the front and two at the rear — preventing it from moving in the event of braking or a collision. An unsecured wheelchair can become a projectile in a crash, causing serious injury to the occupant and other passengers. Correct use of WTORS is a legal requirement on vehicles with forward-facing wheelchair spaces.' },
    { q: 'Can a driver refuse to carry a wheelchair user?', a: 'A driver can only refuse to carry a wheelchair user in very limited circumstances: if the wheelchair exceeds the standard dimensions (70cm wide, 120cm long, 1.35m high), if it cannot be safely secured, or if the vehicle is at capacity. Refusal on any other grounds is likely to constitute unlawful discrimination under the Equality Act 2010.' },
    { q: 'Is this training suitable for community transport operators?', a: 'Yes. The course is highly relevant for community transport, dial-a-ride, school transport and any operator carrying wheelchair users. We can tailor the content to the specific vehicles and passenger groups in your fleet.' },
    { q: 'How long is the course and how many delegates can attend?', a: 'The course runs for a full day and is most effective with groups of 6–12 delegates to allow sufficient practical time on vehicles. We can accommodate larger groups by running multiple sessions. On-site delivery at your depot is available nationwide.' },
  ],
  relatedCourses: [
    { to: '/courses/psvar-training', label: 'PSVAR Training' },
    { to: '/courses/disability-awareness', label: 'Disability Awareness' },
    { to: '/courses/safeguarding', label: 'Safeguarding' },
    { to: '/courses/equality-act', label: 'Equality Act & Accessible Transport' },
  ],
}

export const disabilityAwarenessCourse: CourseData = {
  title: 'Disability Awareness',
  subtitle: 'Building an Inclusive, Respectful and Legally Compliant Passenger Transport Service',
  description: 'Disability awareness training for transport operators and drivers covering visible and hidden disabilities, communication, the social model of disability and the Equality Act.',
  seoDescription: 'Disability awareness training for bus, coach and transport operators. Covers visible and hidden disabilities, inclusive communication, the Equality Act 2010 and practical strategies for delivering an accessible, respectful service.',
  canonical: '/courses/disability-awareness',
  duration: 'Half Day',
  audience: [
    'Bus and coach drivers',
    'Transport customer service staff',
    'Operations and transport managers',
    'Community transport volunteers and drivers',
    'School transport staff',
  ],
  overview: `Research consistently shows that the attitudes and behaviours of transport staff are among the biggest barriers disabled people face when using public transport. A 2024 report by Transport for All found that 41% of disabled passengers had experienced negative attitudes or behaviours from bus drivers. This is not just a reputational issue — it is a legal one. The Equality Act 2010 requires operators to make reasonable adjustments and prohibits less favourable treatment of disabled people.

Disability awareness training goes beyond legal compliance. It helps drivers and staff understand the diverse range of disabilities they will encounter — including many that are not immediately visible — and equips them with the knowledge, empathy and practical skills to deliver a genuinely inclusive service. When passengers feel welcomed, respected and safe, they travel more, complain less, and operators benefit from improved customer satisfaction, reduced complaints and stronger community relationships.

This course uses real-world scenarios, case studies and interactive discussion to bring the subject to life, ensuring that learning is retained and applied in the workplace.`,
  outcomes: [
    'Understand the social model of disability and why it matters in a transport context',
    'Recognise a wide range of visible and non-visible disabilities, including physical, sensory, cognitive and mental health conditions',
    'Communicate effectively and respectfully with disabled passengers',
    'Understand the specific challenges faced by passengers with autism, dementia, anxiety and other hidden disabilities',
    'Apply the Equality Act 2010\'s reasonable adjustments duty in practical transport scenarios',
    'Respond appropriately to requests for assistance without making assumptions',
    'Handle assistance dogs and passengers travelling with carers correctly',
    'Contribute to a positive, inclusive service culture',
  ],
  operatorBenefits: [
    'Reduces complaints and formal discrimination claims',
    'Improves customer satisfaction and passenger loyalty',
    'Demonstrates compliance with the Equality Act 2010',
    'Strengthens relationships with local authorities and disability organisations',
    'Supports tender and contract compliance for accessible transport services',
    'Reduces reputational risk from incidents involving disabled passengers',
  ],
  driverBenefits: [
    'Confidence to interact with all passengers, regardless of disability',
    'Practical communication skills that reduce awkward or difficult situations',
    'Understanding of why certain passengers may need more time or assistance',
    'Reduced anxiety around disability-related situations',
    'A more rewarding and professional working experience',
  ],
  legalContext: `The Equality Act 2010 makes it unlawful to treat a disabled person less favourably because of their disability, or to fail to make reasonable adjustments to ensure they can use a service. In a transport context, this includes providing assistance with boarding and alighting, operating accessibility equipment, and ensuring disabled passengers are not disadvantaged by the attitudes or behaviours of staff. Operators can be held vicariously liable for the actions of their drivers.`,
  practicalContent: [
    'Interactive scenario exercises: responding to passengers with different disabilities',
    'Communication skills practice: language, tone and body language',
    'Case study review: real-world incidents and their outcomes',
    'Group discussion: challenging assumptions and unconscious bias',
    'Practical guidance on assisting passengers with assistance dogs',
    'Workshop: developing a personal action plan for inclusive service delivery',
  ],
  faqs: [
    { q: 'What is the difference between visible and hidden disabilities?', a: 'Visible disabilities are those that are immediately apparent, such as a wheelchair user or someone with a guide dog. Hidden disabilities — including autism, dementia, anxiety, epilepsy, chronic pain and many others — are not immediately obvious but can be just as significant a barrier to travel. This course ensures drivers are equipped to support all passengers, not just those whose needs are visible.' },
    { q: 'Is this course suitable for drivers who have been driving for many years?', a: 'Absolutely. Experienced drivers often benefit most from this training, as it provides an opportunity to reflect on established habits and update knowledge in line with current legislation and best practice. The course is delivered in a supportive, non-judgmental environment.' },
    { q: 'Can this training be combined with other courses?', a: 'Yes. Disability Awareness is frequently delivered alongside Wheelchair Passenger Safety, Safeguarding and Equality Act training as part of a comprehensive accessibility training package. Combined packages offer excellent value for operators training larger groups.' },
    { q: 'Does this course cover the Sunflower Lanyard scheme?', a: 'Yes. The course includes guidance on the Hidden Disabilities Sunflower scheme and other initiatives that help drivers identify and support passengers with non-visible disabilities.' },
  ],
  relatedCourses: [
    { to: '/courses/wheelchair-passenger-safety', label: 'Wheelchair Passenger Safety' },
    { to: '/courses/safeguarding', label: 'Safeguarding' },
    { to: '/courses/equality-act', label: 'Equality Act & Accessible Transport' },
    { to: '/courses/psvar-training', label: 'PSVAR Training' },
  ],
}

export const safeguardingCourse: CourseData = {
  title: 'Safeguarding in Passenger Transport',
  subtitle: 'Protecting Vulnerable Adults and Children in Your Care',
  description: 'Safeguarding training for passenger transport operators and drivers covering the duty of care, recognising abuse, reporting procedures and professional boundaries.',
  seoDescription: 'Safeguarding training for passenger transport operators and drivers. Covers duty of care for vulnerable adults and children, recognising abuse, reporting procedures and professional boundaries. Nationwide delivery.',
  canonical: '/courses/safeguarding',
  duration: 'Half Day',
  audience: [
    'School and college transport drivers',
    'Community transport and dial-a-ride drivers',
    'Drivers transporting adults with learning disabilities',
    'Transport managers and supervisors',
    'Operators holding local authority transport contracts',
  ],
  overview: `Passenger transport operators frequently carry some of the most vulnerable members of society — children travelling to school, adults with learning disabilities, elderly passengers and people with mental health conditions. With this privilege comes a profound duty of care. Safeguarding is not simply a box to tick on a contract compliance form; it is a legal and moral responsibility that every driver and operator must take seriously.

The consequences of safeguarding failures in transport are severe. Operators who cannot demonstrate adequate safeguarding procedures risk losing local authority contracts, facing regulatory action and, most importantly, failing the very passengers who depend on them most.

This course provides drivers and operators with the knowledge and skills to fulfil their safeguarding responsibilities confidently. We cover the legislative framework, the signs of abuse and neglect, correct reporting procedures, professional boundaries and how to create a safeguarding culture within your organisation. Training is delivered by experienced safeguarding practitioners with direct experience of the transport sector.`,
  outcomes: [
    'Understand the legal framework for safeguarding in a transport context, including the Children Act 1989, the Care Act 2014 and the Safeguarding Vulnerable Groups Act 2006',
    'Recognise the different categories of abuse and neglect affecting children and vulnerable adults',
    'Identify behavioural and physical indicators that may suggest a passenger is at risk',
    'Follow correct reporting and escalation procedures within your organisation and to external agencies',
    'Maintain appropriate professional boundaries with vulnerable passengers',
    'Understand the role of the Disclosure and Barring Service (DBS) in transport employment',
    'Contribute to a safeguarding culture that protects passengers, drivers and the organisation',
  ],
  operatorBenefits: [
    'Meets local authority contract requirements for safeguarding training',
    'Reduces the risk of safeguarding incidents and associated liability',
    'Demonstrates a genuine duty of care to commissioners and regulators',
    'Protects the organisation\'s reputation and contract portfolio',
    'Supports DBS compliance and safer recruitment practices',
    'Provides documented evidence of safeguarding training for audit purposes',
  ],
  driverBenefits: [
    'Clear understanding of personal safeguarding responsibilities',
    'Confidence to recognise and respond to safeguarding concerns',
    'Knowledge of correct reporting procedures without fear of getting it wrong',
    'Understanding of professional boundaries that protect both passenger and driver',
    'Peace of mind that comes from knowing how to act in difficult situations',
  ],
  legalContext: `Operators carrying children or vulnerable adults are subject to a range of safeguarding legislation, including the Children Act 1989 and 2004, the Care Act 2014 and the Safeguarding Vulnerable Groups Act 2006. Drivers in regulated activity with children or vulnerable adults must hold an enhanced DBS check. Local authority transport contracts typically require operators to have a written safeguarding policy, trained staff and clear reporting procedures. Failure to meet these requirements can result in contract termination and referral to the DBS.`,
  practicalContent: [
    'Case study analysis: recognising safeguarding concerns in a transport setting',
    'Scenario exercises: what to do when you have a concern',
    'Completing a safeguarding incident report correctly',
    'Understanding your organisation\'s safeguarding policy and escalation procedures',
    'Workshop: professional boundaries — what is and is not appropriate',
    'Developing a personal safeguarding action plan',
  ],
  faqs: [
    { q: 'Do all transport drivers need safeguarding training?', a: 'Any driver who regularly transports children or vulnerable adults as part of their role should receive safeguarding training. This is a requirement of most local authority transport contracts and is strongly recommended by the DfT and CPT as best practice for all operators in this sector.' },
    { q: 'What level of DBS check do transport drivers need?', a: 'Drivers in regulated activity with children or vulnerable adults require an enhanced DBS check with barred list check. The specific requirement depends on the nature and frequency of contact. This course includes guidance on DBS requirements and safer recruitment.' },
    { q: 'What should a driver do if they suspect a passenger is being abused?', a: 'The course covers this in detail. In summary, drivers should not investigate or confront anyone, but should record their observations carefully and report their concern to their designated safeguarding lead as soon as possible. In an emergency where someone is at immediate risk, the driver should call 999.' },
    { q: 'Can this training be delivered as part of a driver induction programme?', a: 'Yes. Safeguarding training is an excellent addition to any driver induction programme, particularly for operators carrying children or vulnerable adults. We can integrate it with other modules including Disability Awareness and Wheelchair Passenger Safety.' },
  ],
  relatedCourses: [
    { to: '/courses/disability-awareness', label: 'Disability Awareness' },
    { to: '/courses/wheelchair-passenger-safety', label: 'Wheelchair Passenger Safety' },
    { to: '/courses/equality-act', label: 'Equality Act & Accessible Transport' },
    { to: '/courses/corporate-training', label: 'Corporate Training Packages' },
  ],
}

export const equalityActCourse: CourseData = {
  title: 'Equality Act & Accessible Transport',
  subtitle: 'Understanding Your Legal Obligations Under the Equality Act 2010',
  description: 'Training on the Equality Act 2010 as it applies to passenger transport operators and drivers, covering protected characteristics, reasonable adjustments, and avoiding discrimination.',
  seoDescription: 'Equality Act 2010 training for passenger transport operators and drivers. Understand protected characteristics, reasonable adjustments, driver duties under Section 165 and how to avoid discrimination claims.',
  canonical: '/courses/equality-act',
  duration: 'Half Day',
  audience: [
    'PSV operators and transport managers',
    'Bus and coach drivers',
    'Customer service and operations staff',
    'HR and compliance managers in transport',
    'Community transport operators',
  ],
  overview: `The Equality Act 2010 is the primary piece of anti-discrimination legislation in Great Britain, and it has significant implications for every passenger transport operator. It protects people with nine protected characteristics — including disability, age, race and religion — from discrimination in the provision of services. For transport operators, this means that the way your drivers interact with passengers, the adjustments you make to your services, and the policies you operate must all be consistent with the Act.

Section 165 of the Equality Act 2010 imposes specific, enforceable duties on drivers of designated wheelchair-accessible vehicles: they must carry the passenger while in the wheelchair, not charge extra, and provide such assistance as is reasonably required. Failure to comply is a criminal offence.

Beyond the specific wheelchair duties, the Act's reasonable adjustments duty requires operators to take positive steps to ensure disabled people can use their services. This is not a passive obligation — operators must anticipate the needs of disabled passengers and remove barriers proactively.

This course demystifies the Equality Act for transport professionals, explaining what it means in practice, what operators must do, and how to avoid the discrimination claims that can damage both finances and reputation.`,
  outcomes: [
    'Understand the nine protected characteristics under the Equality Act 2010',
    'Explain the different types of discrimination: direct, indirect, harassment and victimisation',
    'Describe the reasonable adjustments duty and how it applies to transport services',
    'Understand the specific duties under Section 165 for drivers of wheelchair-accessible vehicles',
    'Identify situations where the Equality Act may be engaged in a transport context',
    'Apply the Act\'s principles to practical service delivery decisions',
    'Understand the consequences of discrimination claims for operators and drivers',
    'Contribute to an organisational culture that values equality and inclusion',
  ],
  operatorBenefits: [
    'Reduces the risk of Equality Act discrimination claims and associated costs',
    'Demonstrates compliance to regulators, commissioners and local authorities',
    'Supports the development of legally compliant policies and procedures',
    'Reduces reputational risk from discrimination incidents',
    'Improves service quality for all passengers, not just those with disabilities',
    'Strengthens the operator\'s position in contract tenders requiring equality compliance',
  ],
  driverBenefits: [
    'Clear understanding of legal duties without complex legal language',
    'Confidence to make the right decisions when faced with equality-related situations',
    'Protection from personal liability through proper procedure',
    'Practical guidance on reasonable adjustments in everyday service delivery',
  ],
  legalContext: `The Equality Act 2010 makes it unlawful to discriminate against a person with a protected characteristic in the provision of services. For transport operators, this includes direct discrimination (treating someone less favourably because of a protected characteristic), indirect discrimination (applying a policy that puts a protected group at a disadvantage), and failure to make reasonable adjustments. Operators can be held vicariously liable for the discriminatory acts of their employees. Section 165 creates specific criminal offences for drivers who fail to comply with their wheelchair duties.`,
  practicalContent: [
    'Interactive scenario exercises: identifying discrimination in transport settings',
    'Case study review: landmark equality cases in transport and their implications',
    'Workshop: auditing your service for equality compliance',
    'Practical guidance on making reasonable adjustments in common transport scenarios',
    'Developing an equality and diversity policy for your organisation',
  ],
  faqs: [
    { q: 'What is the difference between a reasonable adjustment and a special favour?', a: 'A reasonable adjustment is a positive step taken to remove a barrier that puts a disabled person at a disadvantage compared to a non-disabled person. It is a legal requirement, not a favour. The test of reasonableness considers factors including cost, practicality and effectiveness.' },
    { q: 'Can a driver be personally prosecuted under the Equality Act?', a: 'Yes. Section 165 creates specific criminal offences for drivers who fail to comply with their wheelchair duties. Drivers can also be named in civil discrimination claims. This course ensures drivers understand their personal legal position.' },
    { q: 'Does the Equality Act apply to private hire and community transport?', a: 'Yes. The Equality Act\'s service provision provisions apply to all transport operators, not just those running scheduled public services. The specific PSVAR requirements may not apply to all vehicles, but the reasonable adjustments duty applies universally.' },
    { q: 'What is the Paulley case and why does it matter?', a: 'The Paulley v FirstGroup case (Supreme Court, 2017) established that bus drivers must do more than simply ask buggy users to move when a wheelchair user needs the space — they must enforce the request if it is reasonable to do so. This case significantly clarified driver duties and is covered in detail on this course.' },
  ],
  relatedCourses: [
    { to: '/courses/psvar-training', label: 'PSVAR Training' },
    { to: '/courses/disability-awareness', label: 'Disability Awareness' },
    { to: '/courses/wheelchair-passenger-safety', label: 'Wheelchair Passenger Safety' },
    { to: '/courses/safeguarding', label: 'Safeguarding' },
  ],
}

export const corporateTrainingCourse: CourseData = {
  title: 'Corporate Training Packages',
  subtitle: 'Bespoke Compliance and Safety Training Solutions for Transport Operators',
  description: 'Tailored corporate training packages for passenger transport operators, combining accessibility, safety, compliance and driver development modules.',
  seoDescription: 'Corporate training packages for UK passenger transport operators. Bespoke accessibility, compliance and safety training combining PSVAR, Wheelchair Safety, Disability Awareness, Safeguarding and Equality Act modules. Nationwide on-site delivery.',
  canonical: '/courses/corporate-training',
  duration: 'Flexible — Half Day to Multi-Day',
  audience: [
    'Bus and coach operators with 10+ vehicles',
    'Local authority transport departments',
    'School and college transport providers',
    'Community transport organisations',
    'Rail replacement service operators',
    'Airport and hotel transfer operators',
  ],
  overview: `Every transport operation is different. Your fleet, your routes, your passenger groups and your compliance challenges are unique to your business. That is why we offer bespoke corporate training packages that combine our specialist modules into a programme tailored precisely to your needs.

Whether you need to bring an entire driver workforce up to compliance standard, develop a management team's understanding of their legal obligations, or create a comprehensive induction programme for new drivers, we work with you to design and deliver training that fits your operation — at your depot, on your schedule, using your vehicles.

Our corporate packages offer significant cost advantages over individual course bookings, and our experienced trainers bring deep knowledge of the UK passenger transport sector, ensuring that every session is relevant, practical and immediately applicable to your drivers' working lives.

We can also support operators in developing their own internal training capability, creating bespoke training materials, assessment tools and competency frameworks that align with DVSA, DfT and CPT standards.`,
  outcomes: [
    'Receive a training needs analysis tailored to your fleet, routes and passenger groups',
    'Access a fully bespoke training programme combining relevant modules from our course portfolio',
    'Benefit from on-site delivery at your depot using your own vehicles and equipment',
    'Receive comprehensive training records and certificates for all participants',
    'Develop internal training materials and competency frameworks where required',
    'Access post-training support and follow-up assessment options',
    'Demonstrate a proactive compliance culture to the DVSA, Traffic Commissioner and local authority commissioners',
  ],
  operatorBenefits: [
    'Significant cost savings compared to individual course bookings',
    'Training tailored to your specific vehicles, routes and passenger groups',
    'Minimal operational disruption through flexible scheduling',
    'Comprehensive documentation supporting operator licence compliance',
    'Strengthens tender bids and contract renewals requiring training evidence',
    'Builds a consistent compliance culture across your entire workforce',
  ],
  driverBenefits: [
    'Training that is directly relevant to their daily working environment',
    'Learning delivered on familiar vehicles and equipment',
    'Consistent standards across the entire driver workforce',
    'Clear, documented evidence of professional development',
  ],
  legalContext: `Operators holding PSV licences are required to demonstrate to the Traffic Commissioner that they have adequate arrangements for driver training and compliance. The DVSA\'s Guide to Maintaining Roadworthiness and the CPT\'s Compliance Manual both emphasise the importance of documented, systematic training. Corporate training packages provide the documented evidence trail that demonstrates a genuine compliance culture — essential protection in the event of a Traffic Commissioner inquiry or DVSA investigation.`,
  practicalContent: [
    'Training needs analysis and programme design consultation',
    'On-site delivery using operator\'s own vehicles and accessibility equipment',
    'Combined modules: PSVAR, Wheelchair Safety, Disability Awareness, Safeguarding, Equality Act',
    'Management briefings on legal obligations and compliance management',
    'Development of bespoke training materials and assessment tools',
    'Post-training assessment and competency verification',
    'Training records and certificates for all participants',
  ],
  faqs: [
    { q: 'How many drivers can you train in a day?', a: 'For practical courses involving vehicle-based training, we recommend groups of 6–12 delegates to ensure sufficient hands-on time. For classroom-based modules, we can accommodate larger groups. For operators with significant numbers of drivers, we can run multiple sessions over consecutive days.' },
    { q: 'Can you deliver training at weekends or outside normal working hours?', a: 'Yes. We understand that transport operations run around the clock, and we offer flexible scheduling including evenings and weekends to minimise disruption to your service.' },
    { q: 'Do you provide training records and certificates?', a: 'Yes. All participants receive a certificate of completion, and we provide operators with a full training register that can be used as evidence of compliance for DVSA inspections, Traffic Commissioner inquiries and local authority contract audits.' },
    { q: 'Can you help us develop our own internal training programme?', a: 'Yes. We offer a training development consultancy service that helps operators build their own internal training capability. This includes creating bespoke training materials, assessment tools and competency frameworks aligned with DVSA, DfT and CPT standards.' },
    { q: 'Do you cover the whole of the UK?', a: 'Yes. We deliver training nationwide across England, Scotland and Wales. Travel costs are included in our corporate package pricing for most locations. Please contact us to discuss your specific requirements.' },
  ],
  relatedCourses: [
    { to: '/courses/psvar-training', label: 'PSVAR Training' },
    { to: '/courses/wheelchair-passenger-safety', label: 'Wheelchair Passenger Safety' },
    { to: '/courses/disability-awareness', label: 'Disability Awareness' },
    { to: '/courses/safeguarding', label: 'Safeguarding' },
  ],
}

export const allCourses = [
  { to: '/courses/psvar-training', title: 'PSVAR Training', duration: 'Half / Full Day', tag: 'Compliance', description: 'Master the Public Service Vehicles Accessibility Regulations 2000 and PSVAIR 2023. Understand operator and driver duties, inspection readiness and enforcement consequences.' },
  { to: '/courses/accessibility-inspection', title: 'Accessibility Inspection & Compliance', duration: 'Full Day', tag: 'Compliance', description: 'Prepare your fleet and operations for DVSA accessibility inspections. Build a robust compliance management system that protects your operator licence.' },
  { to: '/courses/wheelchair-passenger-safety', title: 'Wheelchair Passenger Safety', duration: 'Full Day', tag: 'Safety', description: 'Comprehensive practical training on safe loading, unloading, ramp and lift operation, WTORS restraint systems and emergency procedures for wheelchair users.' },
  { to: '/courses/disability-awareness', title: 'Disability Awareness', duration: 'Half Day', tag: 'Inclusion', description: 'Equip drivers and staff to deliver a genuinely inclusive service. Covers visible and hidden disabilities, communication skills and the Equality Act reasonable adjustments duty.' },
  { to: '/courses/safeguarding', title: 'Safeguarding in Passenger Transport', duration: 'Half Day', tag: 'Safeguarding', description: 'Essential training for operators carrying children and vulnerable adults. Covers duty of care, recognising abuse, reporting procedures and professional boundaries.' },
  { to: '/courses/equality-act', title: 'Equality Act & Accessible Transport', duration: 'Half Day', tag: 'Legal', description: 'Understand your obligations under the Equality Act 2010, including Section 165 wheelchair duties, reasonable adjustments and how to avoid discrimination claims.' },
  { to: '/courses/corporate-training', title: 'Corporate Training Packages', duration: 'Flexible', tag: 'Bespoke', description: 'Tailored, on-site training programmes combining our specialist modules to meet the specific needs of your fleet, routes and passenger groups.' },
]
