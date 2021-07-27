console.log('wow');

window.onload = (event) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('logged in as', user.displayName);
            googleUser = user;
        } else {
            window.location = "index.html";
        }
        
    });

function handleNoteSubmit() {
    firebase.database().ref(`users/${googleUser.uid}`).push({
        title: noteTitle.value,
        text: noteText.value,
    });
}
}
