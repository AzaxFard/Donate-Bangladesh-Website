document.getElementById('btn-donation')
    .addEventListener('click', function () {
        showSectionById('donation-section');
    });

document.getElementById('btn-history')
    .addEventListener('click', function () {
        showSectionById('history-section');
        document.getElementById('footer').classList.add('hidden')
    })