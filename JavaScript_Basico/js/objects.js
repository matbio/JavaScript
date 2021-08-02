//var champion = {
//    name: "Ahri",
//    home: "Ionia",
//    lore: function() {
//        console.log('Heroi: ' + this.name +' de ' + this.home)
//   }   
//}

var champion = new Object();
champion.name = "Ahri"
champion.home = "Ionia"
champion.lore = function() {
            console.log('Heroi: ' + this.name +' de ' + this.home)
}
champion.friends = ["Shen", "Yasou", "Zed", "Syndra"]   
champion.showFriends = function(){
    champion.friends.forEach(e => {
        console.log(e)
    });
}

champion.lore()
champion.showFriends()
console.log(champion.home)
