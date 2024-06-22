let loginBtn = document.querySelectorAll(".login");

for (let btn of loginBtn) {
    btn.addEventListener("click", (e) => {
        let bg = document.createElement("div");
        bg.style.width = "100vw";
        bg.style.height = "100vh";
        bg.style.backgroundColor = "black";
        bg.style.position = "absolute";
        bg.style.left = 0;
        bg.style.top = 0;
        bg.style.display = "flex";
        bg.style.justifyContent = "center";
        bg.style.alignItems = "center";
        document.body.append(bg);
        //
        let box = document.createElement('form');
        bg.appendChild(box);
        //
        const usernameInput = document.createElement('input');
        usernameInput.type = 'text';
        usernameInput.placeholder = 'Username';

        const submitButton = document.createElement('input');
        submitButton.type = 'submit';
        submitButton.value = 'Submit';

        box.appendChild(usernameInput);
        box.appendChild(submitButton);

        //

        box.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = usernameInput.value;
            bg.remove();
            const ul = btn.parentElement.parentElement;
            const li = document.createElement("li");
            li.style.color = "white";
            li.innerHTML = "Logged in as " + username;
            li.classList.add("text");
            btn.remove();
            for (let su of document.querySelectorAll(".signup")) {
                su.remove();
            }
            ul.append(li);
        });
    })
}