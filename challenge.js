

var sorted = data.sort((a, b) => {
    if (a.tier === b.tier) {
        return a.start - b.start;
    } else if (a.tier.length === b.tier.length) {
        if (a.tier > b.tier) {
            return 1;
        } else {
            return -1;
        }
    } else {
        return a.tier.length - b.tier.length;
    }
}).map(element => {
    element.children = [];
    return element;
});
var tree = [];
sorted.forEach(element => {
    searchLevel(element, tree);
});

function searchLevel(element, level, levelTier) {
    if (level.length) {
        var found;
        level.forEach(branch => {
            if (element.tier.startsWith(branch.tier) && levelTier !== branch.tier) {
                found = true;
                searchLevel(element, branch.children, branch.tier);
            }
        });
        if (!found) {
            level.push(element);
        }
    } else {
        level.push(element);
    }
}

sortLevel(tree);

function sortLevel(childrenArray) {
    childrenArray = childrenArray.sort((a, b) => {
        return a.start - b.start;
    });
    childrenArray.forEach(child => {
        sortLevel(child.children);
    });
}
