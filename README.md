# NgxLivesearch

ngxlivesearch is an angular plugin which allows to prepopulate list of anything based on user's input.

### Demo

![ngx-livesearch-demo](https://user-images.githubusercontent.com/20105433/37862755-aaeb7e16-2f6b-11e8-9920-16573da2e5a1.gif)
![ngx-livesearch-demo-2](https://user-images.githubusercontent.com/20105433/37862786-491525f6-2f6c-11e8-942c-5c030e65a0ae.gif)



## Data source

Component supports both - remote search url and local data.

## Options

You can use this component for populate data from remote server or local array. 

`searchUrl` - remote url for fetching data, searched text, limit and offset would be send automatically.

`localSource` - an array of objects which plugin will use for populating data.

```javascript

defaultSearchOptions {

    searchParam: 'name', // key name which will be send to server or used to search in localSource, default value is `name`.
    
    interval: 400, // request cancel time, used to improve typing experience. 
    
    limit: 10, // how much rows should be loaded at once.
    
    seeAllUrl: null, // url of see all link.
    
    seeAllParams: {}, // params of see all url.
    
    seeAllPassSearchValue: true // whether to send query text to see all url.
    
}
```

```javascript

textOptions {

    seeAll: 'See all',
    
    noResults: 'No results',
    
    placeholder: 'Search'
    
}
```

## Contributions

Contributions are very welcome, please open an issue if you have troubles using component or have ideas on how to improve library.
