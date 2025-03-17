    // Check if counter exists
    let reviewCount = localStorage.getItem('reviewCount');

    if (reviewCount) {
      reviewCount = parseInt(reviewCount) + 1;
    } else {
      reviewCount = 1;
    }

    // Store updated count
    localStorage.setItem('reviewCount', reviewCount);

    // Display the count
    document.getElementById('counterMessage').textContent = `You have submitted ${reviewCount} review(s).`;