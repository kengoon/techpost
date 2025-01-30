# TechPost

TechPost is a smart contract built with Clarity that allows users to write and store tech-related posts on the Stacks blockchain. Each post is stored immutably for a small fee of **1 STX**.

## Features
- **Decentralized Blogging:** Posts are stored on-chain and cannot be altered once written.
- **Pay-to-Post Model:** Users must pay **1 STX** to submit a post.
- **Post Retrieval:** Users can query their own posts and check the total number of posts on the platform.

## Contract Overview
- **Contract Owner:** The contract creator (i.e., the deployer) is designated as the owner.
- **Post Price:** A fixed fee of **1 STX** (`u1000000` micro-STX) is required to write a post.
- **Data Storage:** Posts are stored in a `tech-posts` map with the user’s principal as the key and the post content (UTF-8 string, max 500 characters) as the value.
- **Post Count:** A variable `total-posts` keeps track of the number of posts written.

## Functions
### Read-Only Functions
#### `get-total-post () -> uint`
Returns the total number of posts written on the platform.

#### `get-post (user principal) -> (optional (string-utf8 500))`
Retrieves the post made by a specific user, if it exists.

### Public Functions
#### `write-post (post (string-utf8 500)) -> (response bool uint)`
Allows a user to submit a post by paying **1 STX**. The function:
1. Stores the post under the sender's principal.
2. Increments the total post count.
3. Transfers **1 STX** from the sender to the contract owner.

## Usage
### Writing a Post
To submit a post, call `write-post` with your content. Ensure you have at least **1 STX** in your wallet.

### Retrieving a Post
To fetch a previously written post, use `get-post` and pass in your principal.

### Checking Total Posts
Call `get-total-post` to see the total number of posts recorded on-chain.

## Deployment
1. Deploy the contract on the Stacks blockchain.
2. Interact with the contract using Clarity-enabled wallets or developer tools like `clarinet` or `stacks.js`.

## Future Enhancements
- Add support for multiple posts per user.
- Implement pagination for fetching posts.
- Introduce a voting or comment system.

## License
MIT License

---
Built with ❤️ using Clarity on Stacks.

