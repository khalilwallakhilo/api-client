import { fetchPosts, fetchPostById, fetchUsers, fetchUserById } from './apiClient';
import { displayPosts, displayPostDetails, displayUsers, displayUserDetails } from './display';

// Get cl arguments
const args = process.argv.slice(2);
const command = args[0];
const subCommand = args[1];

function showUsage(): void {
    console.log('\n📚 API Client Usage:\n');
    console.log('  npm run dev posts              - Fetch and display first 5 posts');
    console.log('  npm run dev posts <number>     - Fetch and display first N posts');
    console.log('  npm run dev post <id>          - Fetch and display a specific post');
    console.log('  npm run dev users              - Fetch and display first 5 users');
    console.log('  npm run dev users <number>     - Fetch and display first N users');
    console.log('  npm run dev user <id>          - Fetch and display a specific user');
    console.log('');
}

async function main(): Promise<void> {
    if (!command) {
        showUsage();
        return;
    }

    try {
        switch (command) {
            case 'posts': // Fetch and display posts
                console.log('🔄 Fetching posts...');
                const posts = await fetchPosts();
                const postLimit = subCommand ? parseInt(subCommand) : 5;

                if (isNaN(postLimit) || postLimit < 1) {
                    console.log('❌ Error: Please provide a valid number.');
                    return;
                }

                displayPosts(posts, postLimit);
                break;

            case 'post': // Fetch and display a specific post by ID
                if (!subCommand) {
                    console.log('❌ Error: Please provide a post ID.');
                    return;
                }

                const postId = parseInt(subCommand);
                if (isNaN(postId)) {
                    console.log('❌ Error: Please provide a valid post ID.');
                    return;
                }

                console.log(`🔄 Fetching post ${postId}...`);
                const post = await fetchPostById(postId);

                if (post) {
                    displayPostDetails(post);
                } else {
                    console.log(`❌ Post ${postId} not found.`);
                }
                break;

            case 'users': // Fetch and display users
                console.log('🔄 Fetching users...');
                const users = await fetchUsers();
                const userLimit = subCommand ? parseInt(subCommand) : 5;

                if (isNaN(userLimit) || userLimit < 1) {
                    console.log('❌ Error: Please provide a valid number.');
                    return;
                }

                displayUsers(users, userLimit);
                break;

            case 'user': // Fetch and display a specific user by ID
                if (!subCommand) {
                    console.log('❌ Error: Please provide a user ID.');
                    return;
                }

                const userId = parseInt(subCommand);
                if (isNaN(userId)) {
                    console.log('❌ Error: Please provide a valid user ID.');
                    return;
                }

                console.log(`🔄 Fetching user ${userId}...`);
                const user = await fetchUserById(userId);

                if (user) {
                    displayUserDetails(user);
                } else {
                    console.log(`❌ User ${userId} not found.`);
                }
                break;

            default:
                console.log(`❌ Unknown command: ${command}`);
                showUsage();
        }
    } catch (error) {
        console.error('❌ An unexpected error occurred:', error);
    }
}
main();