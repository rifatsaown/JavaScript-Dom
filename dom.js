function addBorder() {
    document.getElementById('friend-container').style.border = '1px solid';
    document.getElementById('friend-container').style.padding = '10px';
    document.getElementById('friend-container').style.width = '50%';
}

function addBackground() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = "#27E86A"
        friend.style.paddingLeft = '20px'
        friend.style.paddingTop = '1px'
        friend.style.paddingBottom = '1px'
        friend.style.margin = '5px'
        friend.style.borderRadius = '6px'
    }
}

function addFriend() {
    const container = document.getElementById('friend-container');
    const friendAdd = document.createElement('div');
    friendAdd.classList.add("friend");
    friendAdd.innerHTML = `
        <h3 class="name">Friend-NEW</h3>
        <p>Rem, maiores.</p>`;
    container.appendChild(friendAdd);
}
