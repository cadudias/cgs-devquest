const profile_image = document.getElementById('profile-image'); 
let profile_name = document.getElementById('profile-name'); 
let profile_description = document.getElementById('profile-description'); 
let profile_username = document.getElementById('profile-username'); 

async function getUser(user){
    const response = await fetch(`${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`)
    return await response.json()
}

const setProfileData = (data) => {    
    profile_image.src = data.avatar_url ?? 'Não possui'
    profile_name.innerHTML = data.name ?? 'Não possui'
    profile_description.innerHTML = data.bio ?? 'Não possui'
    profile_username.innerHTML = data.login ?? 'Não possui'
}

const result = getUser('cadudias')
result.then(data => setProfileData(data))
