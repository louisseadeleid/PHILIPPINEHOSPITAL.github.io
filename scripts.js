 // Show modals
 function showModal(type) {
    document.getElementById(type + '-modal').style.display = 'flex';
}

// Close modals
function closeModal(type) {
    document.getElementById(type + '-modal').style.display = 'none';
}

// Form submissions
function submitAppointment() {
    alert('Thank you! Your appointment request has been submitted. We will contact you shortly to confirm.');
    closeModal('appointment');
    document.getElementById('appointment-form').reset();
}

function submitConsultation() {
    alert('Thank you for your consultation request. A healthcare professional will contact you within 24 hours.');
    closeModal('consultation');
    document.getElementById('consultation-form').reset();
}

// Medicine search
function searchMedicine() {
    const searchTerm = document.getElementById('medicine-search').value.trim().toLowerCase();
    
    if (!searchTerm) {
        alert('Please enter a medicine name to search');
        return;
    }
    
    // Simulate medicine database with some common medications
    const medicines = {
        'paracetamol': {
            name: 'Paracetamol (Acetaminophen)',
            description: 'A pain reliever and fever reducer used for mild to moderate pain relief.',
            dosage: 'Adults: 500-1000mg every 4-6 hours as needed, not exceeding 4000mg in 24 hours.',
            sideEffects: 'Generally well tolerated when used as directed. Potential side effects include nausea, stomach pain, and in rare cases, liver damage with prolonged use or overdose.',
            interactions: 'May interact with warfarin, isoniazid, and certain anticonvulsants.'
        },
        'amoxicillin': {
            name: 'Amoxicillin',
            description: 'An antibiotic used to treat a wide variety of bacterial infections.',
            dosage: 'Adults: 250-500mg every 8 hours depending on the severity of infection.',
            sideEffects: 'Diarrhea, nausea, vomiting, rash, and allergic reactions.',
            interactions: 'May reduce the effectiveness of oral contraceptives. Should not be taken with certain antibiotics.'
        },
        'ibuprofen': {
            name: 'Ibuprofen',
            description: 'A nonsteroidal anti-inflammatory drug (NSAID) used to reduce pain, inflammation, and fever.',
            dosage: 'Adults: 200-400mg every 4-6 hours as needed, not exceeding 1200mg in 24 hours.',
            sideEffects: 'Stomach upset, heartburn, dizziness, and in some cases, increased risk of heart attack or stroke with prolonged use.',
            interactions: 'Should not be taken with other NSAIDs, aspirin, or blood thinners.'
        },
        'metformin': {
            name: 'Metformin',
            description: 'An oral diabetes medicine that helps control blood sugar levels in people with type 2 diabetes.',
            dosage: 'Initially 500mg twice daily with meals, may be increased gradually.',
            sideEffects: 'Nausea, vomiting, stomach upset, diarrhea, and rarely lactic acidosis.',
            interactions: 'May interact with certain contrast dyes, diuretics, and other medications.'
        },

        'lisinopril': {
            name: 'Lisinopril',
            description: 'An ACE inhibitor used to treat high blood pressure and heart failure.',
            dosage: 'Initially 10mg once daily, may be adjusted based on response.',
            sideEffects: 'Cough, dizziness, headache, and elevated potassium levels.',
            interactions: 'May interact with diuretics, potassium supplements, and NSAIDs.'
        },
        'atorvastatin': {
            name: 'Atorvastatin',
            description: 'A statin used to lower cholesterol and triglyceride levels in the blood.',
            dosage: '10-80mg once daily, depending on the desired effect.',
            sideEffects: 'Muscle pain, liver enzyme changes, and digestive issues.',
            interactions: 'May interact with certain antibiotics, antifungals, and other cholesterol-lowering medications.'
        },
        'omeprazole': {
            name: 'Omeprazole',
            description: 'A proton pump inhibitor used to treat gastroesophageal reflux disease (GERD) and stomach ulcers.',
            dosage: '20-40mg once daily before meals.',
            sideEffects: 'Headache, nausea, diarrhea, and risk of Clostridium difficile infection in the colon.',
            interactions: 'May interact with certain antifungals, clopidogrel, and other medications that affect stomach acid.'
        },
        'sertraline': {
            name: 'Sertraline',
            description: 'An antidepressant used to treat depression, anxiety disorders, and OCD.',
            dosage: '50-200mg once daily, depending on the condition being treated.',
            sideEffects: 'Nausea, diarrhea, insomnia, and sexual dysfunction.',
            interactions: 'May interact with other antidepressants, blood thinners, and certain herbal supplements.'
        },
        'levothyroxine': {
            name: 'Levothyroxine',
            description: 'A synthetic thyroid hormone used to treat hypothyroidism.',
            dosage: 'Initial dose is usually 1.6 mcg/kg/day, adjusted based on thyroid function tests.',
            sideEffects: 'Increased heart rate, insomnia, weight loss, and anxiety if overdosed.',
            interactions: 'May interact with calcium supplements, iron supplements, and certain antacids.'
        },
        'albuterol': {
            name: 'Albuterol',
            description: 'A bronchodilator used to treat asthma and other lung conditions.',
            dosage: '2 puffs every 4-6 hours as needed for wheezing or shortness of breath.',
            sideEffects: 'Tremors, nervousness, headache, and increased heart rate.',
            interactions: 'May interact with other bronchodilators and certain antidepressants.'
        },
        'aspirin': {
            name: 'Aspirin',
            description: 'A nonsteroidal anti-inflammatory drug (NSAID) used to reduce pain, fever, and inflammation.',
            dosage: '325-650mg every 4-6 hours as needed, not exceeding 4000mg in 24 hours.',
            sideEffects: 'Stomach upset, heartburn, and increased risk of bleeding.',
            interactions: 'Should not be taken with other NSAIDs or blood thinners.'
        },
        'hydrochlorothiazide': {
            name: 'Hydrochlorothiazide',
            description: 'A diuretic used to treat high blood pressure and fluid retention.',
            dosage: '12.5-50mg once daily, depending on the condition being treated.',
            sideEffects: 'Increased urination, dizziness, and electrolyte imbalances.',
            interactions: 'May interact with other blood pressure medications and certain diabetes medications.'
        },
        'ciprofloxacin': {
            name: 'Ciprofloxacin',
            description: 'An antibiotic used to treat various bacterial infections.',
            dosage: '500-750mg every 12 hours, depending on the type of infection.',
            sideEffects: 'Nausea, diarrhea, dizziness, and risk of tendon rupture.',
            interactions: 'May interact with antacids, sucralfate, and certain blood thinners.'
        },
        'prednisone': {
            name: 'Prednisone',
            description: 'A corticosteroid used to treat inflammation and autoimmune conditions.',
            dosage: '5-60mg daily, depending on the condition being treated.',
            sideEffects: 'Increased appetite, weight gain, mood changes, and risk of infection.',
            interactions: 'May interact with certain vaccines, blood thinners, and other medications.'
        },
        'furosemide': {
            name: 'Furosemide',
            description: 'A diuretic used to treat fluid retention and high blood pressure.',
            dosage: '20-80mg once or twice daily, depending on the condition being treated.',
            sideEffects: 'Increased urination, dizziness, and electrolyte imbalances.',
            interactions: 'May interact with other blood pressure medications and certain diabetes medications.'
        },
        'clonazepam': {
            name: 'Clonazepam',
            description: 'A benzodiazepine used to treat anxiety and seizure disorders.',
            dosage: '0.5-2mg two to three times daily, depending on the condition being treated.',
            sideEffects: 'Drowsiness, dizziness, and risk of dependence with prolonged use.',
            interactions: 'May interact with other CNS depressants and certain antidepressants.'
        },
        'gabapentin': {
            name: 'Gabapentin',
            description: 'An anticonvulsant used to treat nerve pain and seizures.',
            dosage: '300-600mg three times daily, depending on the condition being treated.',
            sideEffects: 'Dizziness, drowsiness, and fatigue.',
            interactions: 'May interact with antacids and certain pain medications.'
        },
        'metoprolol': {
            name: 'Metoprolol',
            description: 'A beta-blocker used to treat high blood pressure and heart conditions.',
            dosage: '25-100mg once daily, depending on the condition being treated.',
            sideEffects: 'Fatigue, dizziness, and slow heart rate.',
            interactions: 'May interact with other blood pressure medications and certain antidepressants.'
        },
        'losartan': {
            name: 'Losartan',
            description: 'An angiotensin receptor blocker (ARB) used to treat high blood pressure.',
            dosage: '50-100mg once daily, depending on the condition being treated.',
            sideEffects: 'Dizziness, headache, and elevated potassium levels.',
            interactions: 'May interact with diuretics and certain blood pressure medications.'
        },

    };
    
    let found = false; // Flag to check if medicine is found

    // Loop through the medicine database
    for (const key in medicines) {
        // Check if search term matches key or medicine name
        if (key.includes(searchTerm) || medicines[key].name.toLowerCase().includes(searchTerm)) {
            const med = medicines[key];

            // Create HTML content to display medicine details
            const detailsHTML = `
                <h2>${med.name}</h2>
                <hr style="margin: 15px 0;">
                <h3 style="color: #2d5168; margin-top: 20px;">Description</h3>
                <p>${med.description}</p>
                
                <h3 style="color: #2d5168; margin-top: 20px;">Recommended Dosage</h3>
                <p>${med.dosage}</p>
                
                <h3 style="color: #2d5168; margin-top: 20px;">Potential Side Effects</h3>
                <p>${med.sideEffects}</p>
                
                <h3 style="color: #2d5168; margin-top: 20px;">Drug Interactions</h3>
                <p>${med.interactions}</p>
                
                <div style="margin-top: 30px; text-align: center;">
                    <p style="color: #4a9b95; font-weight: bold;">Always consult with a healthcare professional before starting any medication.</p>
                </div>
            `;
            
            // Insert the medicine info into the modal and show it
            document.getElementById('medicine-details').innerHTML = detailsHTML;
            showModal('medicine');
            found = true;
            break;
        }
    }

    // If medicine not found, show error message in modal
    if (!found) {
        document.getElementById('medicine-details').innerHTML = `
            <h2>Medicine Not Found</h2>
            <p>We couldn't find information about "${searchTerm}" in our database.</p>
            <p>Please try another search or contact our pharmacy for assistance.</p>
            <div style="margin-top: 20px; text-align: center;">
                <button onclick="closeModal('medicine')" style="background-color: #4a9b95; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer;">Close</button>
            </div>
        `;
        showModal('medicine');
    }
}

// === Navigation Scroll Functions ===

// Scroll smoothly to the top of the page
function showHome() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Scroll to the Services section
function showServices() {
    document.getElementById('services-section').scrollIntoView({behavior: 'smooth'});
}

// Scroll to the Medicines section
function showMedicines() {
    document.getElementById('medicines-section').scrollIntoView({behavior: 'smooth'});
}

// Scroll to the About section
function showAbout() {
    document.getElementById('about-section').scrollIntoView({behavior: 'smooth'});
}

// Scroll to the bottom of the page (Contact section)
function showContact() {
    window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
}

// === Modal Auto-Close on Background Click ===

// When user clicks outside the modal content, close the modal
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = 'none';
        }
    }
}