# The challenge </br>
Given the following data points, provide a JavaScript solution producing the related data tree.</br>
Both of them are below.</br>


# Required features</br>
The provided solution should mainly focus on efficiency.</br>

# Constraints</br>
The resulting data tree must be identical to the one provided.</br>


# The Algorithm in english</br>

1- sorted the data so that the shortest tier is on top, if two tiers are the same length then short by the tier value, if two tiers are identical then sort by start, this isn't mandatory but it makes the next step easier. then mapped all elements and added an empty children array to them</br>

2- looped through the data, for each element sent it and the initial tree array to the function, that loops the array, looks for elements that have similar tier to our element, if not found just push it to the array, if found go into that element's children and do the function again (recursive function), if the element's tier is equal to the parent tier then don't go into its children.</br>

3- finally went through the tree recursively and sorted it to match the example.</br>


