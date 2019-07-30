# Card
A plain React Native card component which its field can be customized by user.


## Usage

- Outline styling
```jsx
    <Card
        shadow
        borderColor='#f00'
        borderRadius={3}
        containerStyle={styles.cardContainer}
        onPress={() => this.onCardPress()}
    >
        <View style={styles.innerContainer}>
            <Text>Content</Text>
        </View>
    </Card>
```

- Fill styling
```jsx
    <Card
        shadow
        borderRadius={3}
        backgroundColor='#f5f'
        containerStyle={styles.cardContainer}
        onPress={() => this.onCardPress()}
    >
        <View style={styles.innerContainer}>
            <Text>Content</Text>
        </View>
    </Card>
```

## Properties

 Name           | Description                                 | Type     | Required  | Default value   
:---------------|:------------------------------------------- |:---------|:---------:|:--------------:
 backgroundColor        | Color of component's background                   | string   |        | `#00f`          
 borderColor      | Color of component's border                 | string  |      |  null       
 borderRadius        | Radius amount of component's border      | number |        | 5                
 containerStyle         | Add styling props                        | object  |           | {}          
 onPress          | Callback when the component is pressed                  | function   |           | () => {}            
 shadow  | Add shadow styling    | boolean   |           | false        


```


```


## Note:
- If you want to use **outline styling**, you have to insert borderColor props without need to insert backgroundColor props.
  - When you apply outline mode, backgroundColor will be set to `#fff` as default. 
- If you want to use **fill styling**, you have to insert backgroundColor props.