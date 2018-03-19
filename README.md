# NgxLivesearch

ngxlivesearch is an angular plugin which allows to prepopulate list of anything based on user's input.

![ngxlivesearch](https://user-images.githubusercontent.com/6073745/36353212-00595980-14dd-11e8-8530-d1af260de4af.jpg)
![ngx2](https://user-images.githubusercontent.com/6073745/36353236-64f00b8c-14dd-11e8-831f-f10f0b889bef.jpg)



## Data source

Component supports both remote search url and local data.

## Options

You can use this component for populate data from remote server or local array. 

searchUrl - remote url for fetching data, searched text, limit and offset would be send automatically.

localSource - an array of objects which plugin will use for populating data.

defaultSearchOptions {

        searchParam: 'name', // key name which will be send to server or used to search in localSource, default value is `name`.

        interval: 400, // request cancel time, used to improve typing experience. 
        
        limit: 10, // how much rows should be loaded at once.
        
        seeAllUrl: null, // url of see all link.
        
        seeAllParams: {}, // params of see all url.
        
        seeAllPassSearchValue: true // whether to send query text to see all url.

}

textOptions {

        seeAll: 'See all', 
        
        noResults: 'No results',
        
        placeholder: 'Search'

}


## Contributions

Contributions are very welcome, please open an issue if you have troubles using component or have ideas on how to improve library.
