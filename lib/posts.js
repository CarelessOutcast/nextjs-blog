
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const postsDirectory = path.join(process.cwd(),'posts');

export function getSortedPostsData(){
  // TODO: Query database for posts; 
  // Get all the posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Filename as ID
    const id = fileName.replace(/\.md$/,'');

    // Parse the markdown into something usable
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8'); // contents as string
    const matterResult = matter(fileContents);
    return {
      id, 
      ...matterResult.data,
    };
  });
  // Sorting the posts by time
  return allPostsData.sort((a,b) => {
    if (a.date < b.date){
      return 1;
    }
    return -1;
  });
}

