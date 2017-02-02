new Vue({
  el: '#gameboard',
  data:{
    grid: [],
    rows: 0,
    cols: 0
  },
  mounted: function(){
    this.buildGrid(3,4)
  },
  methods:{
    toggleCol: function(col, rIndex, cIndex){
      var row = this.grid[rIndex]

      col.on = !col.on

      var nextCol = row[cIndex + 1]
      var prevCol = row[cIndex - 1]
      var upRow = this.grid[rIndex-1]
      var downRow = this.grid[rIndex+1]


      if(upRow){
        var upCol = upRow[cIndex]
        if(upCol){
          upCol.on = !upCol.on
        }
      }


      if(downRow){
        var downCol = downRow[cIndex]
        if(downCol){
          downCol.on = !downCol.on
        }
      }


      if(nextCol){
        nextCol.on = !nextCol.on
      }
      if(prevCol){
        prevCol.on = !prevCol.on
      }

    },
    buildGrid: function(rows, cols){
      var gridBeingBuilt = []
      for(var i = 0; i < rows; i++){
        gridBeingBuilt[i] = []
        for(var j = 0; j < cols; j++){
          gridBeingBuilt[i][j] = {
          on: Math.random() > 0.5,
          cords: {
            x: j,
            y: i
          }
          }
        }
      }
      this.grid = gridBeingBuilt
    },
    solve: function(){
      this.grid.forEach(row => {
        row.forEach(col => {
          col.on = true
        })
      })
    }
  }
})