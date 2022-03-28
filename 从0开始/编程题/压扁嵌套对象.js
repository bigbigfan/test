const flatObj = function(obj, prekey) {
   return Object.keys(obj).reduce((tol, cur) => {
       const value = obj[cur] 
      // 区分上次递归拷贝的是对象还是数组决定这次的拼接方式    
      const concatType = Array.isArray(obj)? `${prekey}[${cur}]` : `${prekey}.${cur}`
      // 区分上次递归是否有prekey决定是否需要拼接   
       const key = prekey? concatType : cur
     //  决定是否递归调用  
       return typeof value === 'object' ? {...tol, ...flatObj(value, key)} : {...tol, [key]: value}
   }, {})
}

const x = {a:{b:{c: {d:1}}}, f: 2, g: [1,2,3]}

console.log(flatObj(x));







