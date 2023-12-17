function transformTree(tree) {
    const buildTree = (index) => {
        if (index < tree.length && tree[index] !== null) {
        const node = {
            value: tree[index],
            left: buildTree(2 * index + 1),
            right: buildTree(2 * index + 2),
        };
        return node;
        }
        return null;
    };

return buildTree(0);
}

// TESTS
const assert = require('assert');

try {
    assert.deepStrictEqual(transformTree([3, 1, 0, 8, 12, null, 1]), 
    {
        value: 3,
        left: {
          value: 1,
          left: {
            value: 8,
            left: null,
            right: null
          },
          right: {
            value: 12,
            left: null,
            right: null
          }
        },
        right: {
          value: 0,
          left: null,
          right: {
            value: 1,
            left: null,
            right: null
          }
        }
      }
    );
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(transformTree([]), null);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(transformTree([1]), 
    {
        "value": 1,
        "left": null,
        "right": null
    });
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(transformTree([17, 0, null, null, 1]), 
    {
        "value": 17,
        "left": {
          "value": 0,
          "left": null,
          "right": {
            "value": 1,
            "left": null,
            "right": null
          }
        },
        "right": null
      });
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(transformTree([1,2,3]), 
    {
        "value": 1,
        "left": {
          "value": 2,
          "left": null,
          "right": null
        },
        "right": {
          "value": 3,
          "left": null,
          "right": null
        }
      });
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(transformTree([2, 7, 5, null, 6, null, 9, null, null, 1, 11, null, null, null, 10]), 
    {
        "value": 2,
        "left": {
          "value": 7,
          "left": null,
          "right": {
            "value": 6,
            "left": {
              "value": 1,
              "left": null,
              "right": null
            },
            "right": {
              "value": 11,
              "left": null,
              "right": null
            }
          }
        },
        "right": {
          "value": 5,
          "left": null,
          "right": {
            "value": 9,
            "left": null,
            "right": {
              "value": 10,
              "left": null,
              "right": null
            }
          }
        }
      }
      );
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}
