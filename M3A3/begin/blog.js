const posts = [
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' }
  ];

  const article = {
    id: 1,
    title: 'Sample Article',
    content: 'This is a sample article.'
  };

  const postsJson = JSON.stringify(posts);

  const articleJson = JSON.stringify(article);
  
  console.log(postsJson);
  console.log(articleJson);
  