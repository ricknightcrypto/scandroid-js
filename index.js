import projects from './projects/index.js';


// Run through all projects and get balances.
// Write balances to JSON file
console.log('PROJECTS', projects);

projects.forEach(p => {
    console.log('PROJECTS', p);

    // Scan Blockchain here based on timestamp 

    // Break off some kindof threading here
    p.tvl();
    // 
});