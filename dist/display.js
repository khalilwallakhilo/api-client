"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayPosts = displayPosts;
exports.displayUsers = displayUsers;
exports.displayPostDetails = displayPostDetails;
exports.displayUserDetails = displayUserDetails;
function displayPosts(posts, limit = 5) {
    if (posts.length === 0) {
        console.log('No posts available to display.');
        return;
    }
    console.log(`\n📝 Posts (showing first ${limit}):\n`);
    console.log('─'.repeat(60)); // Decorative separator
    const postsToDisplay = posts.slice(0, limit); // Limit number of posts displayed
    postsToDisplay.forEach(post => {
        console.log(`ID: ${post.id}`);
        console.log(`Title: ${post.title}`);
        console.log('─'.repeat(60));
    });
    console.log("\nTotal Posts available:", posts.length);
}
function displayUsers(users, limit = 5) {
    if (users.length === 0) {
        console.log('No users available to display.');
        return;
    }
    console.log(`\n👥 Users (showing first ${limit}):\n`);
    console.log('─'.repeat(60)); // Decorative separator
    const usersToDisplay = users.slice(0, limit); // Limit number of users displayed
    usersToDisplay.forEach(user => {
        console.log(`ID: ${user.id}`);
        console.log(`Name: ${user.name}`);
        console.log(`Username: @${user.username}`);
        console.log(`Email: ${user.email}`);
        console.log('─'.repeat(60));
    });
    console.log("\nTotal Users available:", users.length);
}
function displayPostDetails(post) {
    console.log('\n📄 Post Details:\n');
    console.log('═'.repeat(60));
    console.log(`ID: ${post.id}`);
    console.log(`User ID: ${post.userId}`);
    console.log(`Title: ${post.title}`);
    console.log(`\nBody:\n${post.body}`);
    console.log('═'.repeat(60));
    console.log('');
}
function displayUserDetails(user) {
    console.log('\n👤 User Details:\n');
    console.log('═'.repeat(60));
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Username: @${user.username}`);
    console.log(`Email: ${user.email}`);
    console.log(`Phone: ${user.phone}`);
    console.log(`Website: ${user.website}`);
    console.log(`\nAddress:`);
    console.log(`  ${user.address.street}, ${user.address.suite}`);
    console.log(`  ${user.address.city}, ${user.address.zipcode}`);
    console.log(`\nCompany:`);
    console.log(`  ${user.company.name}`);
    console.log(`  "${user.company.catchPhrase}"`);
    console.log('═'.repeat(60));
    console.log('');
}
