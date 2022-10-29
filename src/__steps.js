/*
>> go to firebase and select hosting 
>> get started 
******One time for each computer******
1. npm install -g firebase-tools
2. firebase login
*****for each project one time******
3. firebase init
4. Are you ready to proceed? (Y/n) > y
5.Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. select > Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys.
6. Please select an option: select > Use an existing project
7. Select a default Firebase project for this directory: select > dragon-news-client-aa48c (dragon-news-client) [it's mean your project name in firebase]
8. What do you want to use as your public directory? select > build
9.  Configure as a single-page app (rewrite all urls to /index.html)? select > Yes 
10. Set up automatic builds and deploys with GitHub? select > No
11. then run > npm run build 
12. then run > firebase deploy 
Note: akhon link ta jodi amra browser e calai tahole kaj korbe kintu server site ta jodi off kore di i mean localhost:5000 eta off kore di tahole page reload dear por error dibe.eta solve korar jonno jeta korte hobe:
13. go to https://vercel.com/ and register here 
14. go to https://vercel.com/docs/cli 
15. run in the server site > npm i -g vercel
16. type ? vercel 
17. select > Continue with GitHub (after select this, vercel will permission my account if i already loggedin in vercel)
18.  Set up and deploy “F:\Study\For Home\programming hero\10.Milestone_10\Module_60\practice\dragon-news-server”? [Y/n] select > y
19. Link to existing project? [y/N] select > n
20.  What’s your project’s name? select > dragon-news-server(mane jeta default hishebe thakbe shetai select krbo)
21. In which directory is your code located? select > ./
22. Want to modify these settings? [y/N] select >n
23. then make a json file name: 
vercel.json and type like this (ss)
24. then type vercel in cmd in the server site 
25. then type vercel --prod
26. then replace http://localhost:3000/ to  https://dragon-news-server-one-roan.vercel.app in the client-site [etar mane hocche ager step gula korar por ekta link dekha jabe shetai boshaici eikhane]
27. then ami npm start die check kore dekte parbo coltece kina
28. then type npm run build in the client-site 
29. then type firebase deploy in the client-site 
*/
