// admin
function createUser(name) {
    // kl;ads
    // TODO: temporary AES password
    // TODO: change password on first use
}


// admin
function addUserToGroup(username, groupName, pubkey, password) {
    // TODO: get group private key
    // TODO: encrypt privkey with user pubkey
    groups[groupName].users[username] = crypt
    users[username].groups += groupName
    
}

// admin
function changeGroupKeys(adminPrivkey) {
    // recrypt all group keys with new privkey
    // recrypt all group secrets with group privkey
}

// admin
function changeSecret(groupPrivkey, value) {
    // recrypt with new value using group private key
}


// admin
function createGroup(name, pubkey) {
    
}


// name: of secret
// value: of secret
function addSecretToGroup(group, name, value, pubkey) {
    
    // creator of group can add people
    // creator of group adds admin
    var cipher = crypto.encrypt_secret(value, pubkey);
    obj.groups[group].secrets[name] = cipher;
    obj.secrets[name] = value;
}

// recursive function that adds the groups user is part of + groups their group are part of
function getGroups(group, groups) {
    //TODO: get groups in groups into 1D array
    
    if (obj[group].groups_composed != []) {
        
        var fn = function nextLevelRecursion(v){ // sample async action
            // return new Promise(resolve => setTimeout(() => resolve(v * 2), 100));
            return new Promise(resolve => setTimeout(() => resolve(getGroups(group, groups), 100));
        };
        // map over forEach since it returns
        
        var actions = obj[groups].groups_composed.map(fn); // run the function over all items.
        
        // we now have a promises array and we want to wait for it
        
        var results = Promise.all(actions); // pass array of promises
        
        results.then(data => // or just .then(console.log)
            groups.concat(data) // [2, 4, 6, 8, 10]
        );
        
    }
    // else do nothing, i.e. base case is when there are no more groups to parse
}


// less params. is there overloading in js?
function getGroupList(user) {
    var groups = obj.users[user].groups;
    
    var fn = function get_subgroups(v){ // sample async action
        return new Promise(resolve => setTimeout(() => resolve(getGroups(group, groups), 100));
    };
    // map over forEach since it returns
    
    var actions = groups.map(fn); // run the function over all items.
    
    // we now have a promises array and we want to wait for it
    
    var results = Promise.all(actions); // pass array of promises
    
    results.then(data => // or just .then(console.log)
        groups.concat(data) // [2, 4, 6, 8, 10]
    );
    
    return groups;
}


function deleteSecret(secret) {
    delete obj.secrets[secret];
}

function decryptUserPrivate(user, password) {
    obj.users[user].private;
    
}

function decryptAdminKeys(password) {
    obj.users.admin.public
    obj.users.admin.private
    var keys = {
        privkey: "private",
        pubkey: "public"
    };
    return keys;
}