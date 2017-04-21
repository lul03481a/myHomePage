var config = {
   entry: 'C:\\Users\\x\\ReactProjects\\myHomePage\\main.js',
	
   output: {
      path:'C:\\Users\\x\\ReactProjects\\myHomePage',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;