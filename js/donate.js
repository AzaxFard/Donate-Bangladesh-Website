document.getElementById('btn-donate-noakhali').addEventListener('click', function (event) {
    event.preventDefault();

    const donateMoney = getInputFieldValueById('input-donate-noakhali');

    const balance = getTextFieldValueById('account-balance');

    if (donateMoney <= 0 || isNaN(donateMoney)) {
        alert('Failed to donate money! Write donation amount Properly');
        return;
    }
    else if (donateMoney < balance) {
        const newBalance = balance - donateMoney;

        const fund = getTextFieldValueById('fund-noakhali');
        const newfund = fund + donateMoney;

        document.getElementById('account-balance').innerText = newBalance;
        document.getElementById('fund-noakhali').innerText = newfund;
    }
    else {
        alert('Not enough money in account');
        return;
    }

    // history log
    const div = document.createElement('div')
    div.classList.add('border')
    div.classList.add('rounded-md')
    div.classList.add('border-slate-100')
    div.classList.add('p-5')
    div.classList.add('w-full')
    div.classList.add('border')
    div.classList.add('rounded-md')

    const h1 = document.createElement('h1');
    h1.classList.add('font-bold')
    h1.classList.add('text-xl')
    h1.classList.add('mb-5')
    h1.innerText = `${donateMoney} Taka is Donated for Flood at Noakhali, Bangladesh`;

    // adding Time
    const dateElement = document.createElement('div');
    const now = new Date();
    dateElement.classList.add('font-light')
    const formattedDate = now.toString();
    dateElement.innerText = `Date: ${formattedDate}`;

    div.appendChild(h1)
    div.appendChild(dateElement)

    document.getElementById('history-container').appendChild(div);
})

// feni donate
document.getElementById('btn-donate-feni').addEventListener('click', function (event) {
    event.preventDefault();

    const donateMoney = getInputFieldValueById('input-donate-feni');

    const balance = getTextFieldValueById('account-balance');

    if (donateMoney <= 0 || isNaN(donateMoney)) {
        alert('Failed to donate money! Write donation amount Properly');
        return;
    }
    else if (donateMoney < balance) {
        const newBalance = balance - donateMoney;

        const fund = getTextFieldValueById('fund-feni');
        const newfund = fund + donateMoney;

        document.getElementById('account-balance').innerText = newBalance;
        document.getElementById('fund-feni').innerText = newfund;
    }
    else {
        alert('Not enough money in account');
        return;
    }

    // history log 
    const div = document.createElement('div')
    div.classList.add('border')
    div.classList.add('rounded-md')
    div.classList.add('border-slate-100')
    div.classList.add('p-5')
    div.classList.add('w-full')
    div.classList.add('border')
    div.classList.add('rounded-md')

    const h1 = document.createElement('h1');
    h1.classList.add('font-bold')
    h1.classList.add('text-xl')
    h1.classList.add('mb-5')
    h1.innerText = `${donateMoney} Taka is Donated for Flood relief in Feni, Bangladesh`;

    // adding Time
    const dateElement = document.createElement('div');
    const now = new Date();
    dateElement.classList.add('font-light')
    const formattedDate = now.toString();
    dateElement.innerText = `Date: ${formattedDate}`;

    div.appendChild(h1)
    div.appendChild(dateElement)

    document.getElementById('history-container').appendChild(div);

})

// protest donate
document.getElementById('btn-donate-protest').addEventListener('click', function (event) {
    event.preventDefault();

    const donateMoney = getInputFieldValueById('input-donate-protest');

    const balance = getTextFieldValueById('account-balance');

    if (donateMoney <= 0 || isNaN(donateMoney)) {
        alert('Failed to donate money! Write donation amount Properly');
        return;
    }
    else if (donateMoney < balance) {
        const newBalance = balance - donateMoney;

        const fund = getTextFieldValueById('fund-protest');
        const newfund = fund + donateMoney;

        document.getElementById('account-balance').innerText = newBalance;
        document.getElementById('fund-protest').innerText = newfund;
    }
    else {
        alert('Not enough money in account');
        return;
    }

    // history log
    const div = document.createElement('div')
    div.classList.add('border')
    div.classList.add('rounded-md')
    div.classList.add('border-slate-100')
    div.classList.add('p-5')
    div.classList.add('w-full')
    div.classList.add('border')
    div.classList.add('rounded-md')

    const h1 = document.createElement('h1');
    h1.classList.add('font-bold')
    h1.classList.add('text-xl')
    h1.classList.add('mb-5')
    h1.innerText = `${donateMoney} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;

    // adding Time
    const dateElement = document.createElement('div');
    const now = new Date();
    dateElement.classList.add('font-light')
    const formattedDate = now.toString();
    dateElement.innerText = `Date: ${formattedDate}`;

    div.appendChild(h1)
    div.appendChild(dateElement)

    document.getElementById('history-container').appendChild(div);
})

