# virtual dom 虚拟节点

通过Object对象模拟DOM中的节点，然后通过rander函数将其渲染成真实的DOM节点

# DOM diff 比较两个虚拟DOM的区别，比较两个对象的区别
根据两个虚拟对象创建出来的补丁，描述改变的内容，将这个补丁用来更新dom