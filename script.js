document.addEventListener("DOMContentLoaded", () => {
    const buttonUser = () => {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                const dob = new Date(user.dob.date);
                const options = {
                    year: "numeric", month: "long", day: "numeric"
                };
                const formattedDob = dob.toLocaleDateString("pt-br", options);
                const age = user.dob.age;

                document.getElementById('name').textContent = `${user.name.first} ${user.name.last}`;
                document.getElementById('photo').src = user.picture.large;
                document.getElementById('email').textContent = `E-mail: ${user.email}`;
                document.getElementById('dob').textContent = `Data de Nascimento: ${formattedDob}`;
                document.getElementById('age').textContent = `Idade: ${age}`;
                
                
            })
            .catch(error => console.error('Erro ao buscar usuário:', error));
    };

    

    document.getElementById('buttonUser').addEventListener('click', buttonUser);
});
