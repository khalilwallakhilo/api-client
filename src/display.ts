import { Post, User } from './types';

export function displayPosts(posts: Post[], limit: number = 5): void { // Function to display posts in the console
    if (posts.length === 0) {
        console.log('No posts available to display.');
        return;
    }

    console.log(`\n📝 Posts (showing first ${limit}):\n`);
    console.log('─'.repeat(60)); // Decorative separator

    const postsToDisplay = posts.slice(0, limit); // Limit number of posts displayed

    postsToDisplay.forEach(post => { // Iterating through each post
        console.log(`ID: ${post.id}`);
        console.log(`Title: ${post.title}`);
        console.log('─'.repeat(60));
    });

    console.log("\nTotal Posts available:", posts.length);
}

export function displayUsers(users: User[], limit: number = 5): void { // Function to display users in the console
    if (users.length === 0) {
        console.log('No users available to display.');
        return;
    }
    console.log(`\n👥 Users (showing first ${limit}):\n`)
    console.log('─'.repeat(60)); // Decorative separator
    const usersToDisplay = users.slice(0, limit); // Limit number of users displayed
    usersToDisplay.forEach(user => { // Iterating through each user
        console.log(`ID: ${user.id}`);
        console.log(`Name: ${user.name}`);
        console.log(`Username: @${user.username}`);
        console.log(`Email: ${user.email}`);
        console.log('─'.repeat(60));
    });
    console.log("\nTotal Users available:", users.length);
}

export function displayPostDetails(post: Post): void { // Function to display post details in the console
    console.log('\n📄 Post Details:\n');
    console.log('═'.repeat(60));
    console.log(`ID: ${post.id}`);
    console.log(`User ID: ${post.userId}`);
    console.log(`Title: ${post.title}`);
    console.log(`\nBody:\n${post.body}`);
    console.log('═'.repeat(60));
    console.log('');
}

export function displayUserDetails(user: User): void { // Function to display user details in the console
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
