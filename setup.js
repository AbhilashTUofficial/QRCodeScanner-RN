const { exec } = require('child_process');
const projectName = process.argv[2];
const fs = require('fs');

// FolderStructure
const folderStructure = {
  src: {
    Components: {
        HomeScreen:{}
    },
    Screens: {
        HomeScreen:{
            "HomeScreen.tsx":"",
            "new.tsx":"",

        }
    },
    Utils: {},
    Assets: {
        images: {},
        fonts: {},
        icons:{}
      },
    
  },
};

// Create folder structure
const createFolderStructure = (base, structure) => {
  Object.keys(structure).forEach(key => {
    const path = `${base}/${key}`;
    fs.mkdirSync(path, { recursive: true });
    if (typeof structure[key] === 'object') {
      createFolderStructure(path, structure[key]);
    }
  });
};


exec(`npx react-native init ${projectName}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  console.log(stdout);
  exec(`cd ${projectName} && npm i`, 
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error}`);
      return;
    }
    console.log(stderr)
    createFolderStructure('./'+projectName, folderStructure);
    console.log(stdout);

    exec(`cd ${projectName} && ls`, 
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error}`);
        return;
      }
      console.log(stderr)

      console.log(stdout);
    });
  });



});