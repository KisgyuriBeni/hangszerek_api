api start -
    install (
        npm init -y 
        npm install --save-dev hai server
    )
    setup(
        hai-server.json(
            {
                "port":8000,
                "watch":true
            }
        )
        packegLock.json(
            "start":"hai-server 'nev'.json"
        )
    )
    start(
        npm start
    )


app start -
    npx expo start
    w - open browser window