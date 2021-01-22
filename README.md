# Valorant Data Analyzer
This tool analyzes valorant match history and prints summary containing your games played, games results, winrate and hours wasted in each game mode (Unrated, ranked, deathmatch, etc..) Output example:

```
❯ yarn start
yarn run v1.16.0
$ ts-node ./src/index.ts
Showing results from 2020-06-16 23:41:03 to 2020-12-27 20:40:25

Unrated games played: 1176
Unrated games results (W/L): 603/573
Unrated Winrate: 51.3
Hours wasted in Unrated: 606.8

Spike Rush games played: 331
Spike Rush games results (W/L): 173/158
Spike Rush Winrate: 52.3
Hours wasted in Spike Rush: 45.9

Ranked games played: 275
Ranked games results (W/L): 140/135
Ranked Winrate: 50.9
Hours wasted in Ranked: 162.2

Deathmatch games played: 430
Deathmatch games results (W/L): 54/376
Deathmatch Winrate: 12.6
Hours wasted in Deathmatch: 48.3

Snowball games played: 3
Snowball games results (W/L): 1/2
Snowball Winrate: 33.3
Hours wasted in Snowball: 0.2

All games played: 2215
All games results (W/L): 971/1244
All Winrate: 43.8
Hours wasted in All: 863.4

```

# Where does the tool get the data from?
This tool does not connect to riot servers nor it collects your username and password. You have to supply it the data manually. To get the data, you need to make a ticket requesting the data from riot. To do so, visit [Submit a request/ticket page](https://support-valorant.riotgames.com/hc/en-us/requests/new) and select request type of `Account Management, Data Requests, or Deletion`. After making the request, you will have to wait 30 days before riot sends you the data.

# After getting the data, where do i place it?
After getting the `data.zip` file, you will have to unzip it, you will find your match history in `./data/valorant_match_history.json`. You will need to copy this file to the root of this project and replace the existing dummy `valorant_match_history.json` file.

# Requirements
You will need yarn/npm package manager installed in your machine to run this tool

# How to run
Simply run the following commands in the root directory of this project
```
$ yarn
$ yarn start
```

# License
MIT

# Author
Mohammed Alhaddar - 2020