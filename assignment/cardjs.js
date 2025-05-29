function addCard() {
    
    const name = document.getElementById('name').value.trim();
    const profession = document.getElementById('profession').value.trim();
    const description = document.getElementById('description').value.trim();
    const photoInput = document.getElementById('photo');
    const photoFile = photoInput.files[0];

    if (!name || !profession || !description || !photoFile) {
        alert('Please fill in all fields and select a photo.');
        return;
    }

   
    const cardContainer = document.getElementById('cardContainer');
    if (cardContainer.children.length >= 10) {
        alert('You can only add up to 10 cards.');
        return;
    }

   
    const reader = new FileReader();

    reader.onload = function (e) {
        
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';

        const img = document.createElement('img');
        img.src = e.target.result;
        img.alt = `Photo of ${name}`;

        const nameH3 = document.createElement('h3');
        nameH3.textContent = name;

        const professionP = document.createElement('p');
        professionP.className = 'profession';
        professionP.textContent = profession;

        const descriptionP = document.createElement('p');
        descriptionP.className = 'description';
        descriptionP.textContent = description;

        
        cardDiv.appendChild(img);
        cardDiv.appendChild(nameH3);
        cardDiv.appendChild(professionP);
        cardDiv.appendChild(descriptionP);

      
        cardContainer.appendChild(cardDiv);

        
        document.getElementById('profileForm').reset();
       
    }

    reader.onerror = function() {
        alert('Error reading file. Please try again.');
    }

    // Read the file as a Data URL
    reader.readAsDataURL(photoFile);
}
