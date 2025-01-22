 const bands = [
      'The Plot in You',
      'The Devil Wears Prada',
      'Pierce the Veil',
      'Norma Jean',
      'The Bled',
      'Say Anything',
      'The Midway State',
      'We Came as Romans',
      'Counterparts',
      'Oh, Sleeper',
      'A Skylit Drive',
      'Anywhere But Here',
      'An Old Dog'
    ];

    // Function to clean up band names for sorting
    function cleanBandName(name) {
      return name.replace(/^(a|an|the)\s+/i, '').toLowerCase();
    }

    // Sort the band names alphabetically while ignoring 'a', 'an', 'the'
    const sortedBands = bands.sort((a, b) => {
      const cleanA = cleanBandName(a);
      const cleanB = cleanBandName(b);
      return cleanA.localeCompare(cleanB);
    });
  function displayBands() {
      const bandList = document.getElementById('band');
      sortedBands.forEach(band => {
        const listItem = document.createElement('li');
        listItem.textContent = band;
        bandList.appendChild(listItem);
      });
    }

    // Display the sorted list of bands
    displayBands();