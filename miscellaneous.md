# async await vs promise.all
* Theo-t3.gg [https://youtu.be/3h7Lc85RDLo?feature=shared] - 2:14
* He explains how he was able to 4x the performance for one of his client where the client had used multiple await blocks starting from taking user input and then followed by couple of prisma database queries to get more data and work on the user data. In all the blocks, client had used an await. He optimized it by taking all the queries and wrapping them in promise.all so that they can run in parallel instead of individually.
