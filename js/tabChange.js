document.getElementById('btn-donation')
    .addEventListener('click', function () {
        showSectionById('donation-section');
        document.getElementById('btn-donation').classList.add('bg-[#B4F461]')
        document.getElementById('btn-history').classList.remove('bg-[#B4F461]')
    });

document.getElementById('btn-history')
    .addEventListener('click', function () {
        showSectionById('history-section');
        document.getElementById('footer').classList.add('hidden')
        document.getElementById('btn-history').classList.add('bg-[#B4F461]')
        document.getElementById('btn-donation').classList.remove('bg-[#B4F461]')
    })

document.getElementById('btn-blog')
    .addEventListener('click', function () {
        window.location.href = 'blog.html'
    })
