/**
 обход n- дерева, подсчет его общего веса

 массив объектов val - вес луча, child - имеет потомков

 */

const myTree = [
    {
        val: 1,
        child: [
            {
                val: 2,
                child: [
                    {
                        val: 3
                    },
                    {
                        val: 3
                    }, {
                        val: 3
                    }, {
                        val: 3
                    }
                ]
            },
            {
                val: 2
            }, {
                val: 2
            }, {
                val: 2
            }
        ]
    },
    {
        val: 3,
        child: [
            {
                val: 1,
                child: [
                    {
                        val: 5
                    },
                    {
                        val: 3
                    }, {
                        val: 4
                    }, {
                        val: 1
                    }
                ]
            },
            {
                val: 3
            }, {
                val: 3
            }, {
                val: 2,
                child: [
                    {
                        val: 1,
                        child: [
                            {
                                val: 5,
                                child: [
                                    {
                                        val: 1,
                                        child: [
                                            {
                                                val: 5
                                            },
                                            {
                                                val: 3
                                            }, {
                                                val: 4
                                            }, {
                                                val: 1
                                            }
                                        ]
                                    },
                                    {
                                        val: 3
                                    }, {
                                        val: 3
                                    }, {
                                        val: 2
                                    }
                                ]
                            },
                            {
                                val: 3
                            }, {
                                val: 4
                            }, {
                                val: 1
                            }
                        ]
                    },
                    {
                        val: 3
                    }, {
                        val: 3
                    }, {
                        val: 2
                    }
                ]
            }
        ]
    }
];


function treeSumIterative(tree) {
    if (!tree.length) return 0;
    let sum = 0;
    const stack = [];

    tree.forEach(node => stack.push(node));

    while (stack.length) {
        let node = stack.pop();
        sum += node.val;
        if (node.child) node.child.forEach(n => stack.push(n));
    }

    return sum;
}
