var ghpages = require('gh-pages');
ghpages.publish('build', {
    branch: 'master'
  }, ()=>{
      console.log("[GH-PAGES] finished");
  });