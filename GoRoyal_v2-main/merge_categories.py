import json
import re

def normalize_name(name):
    # Normalize for comparison
    return re.sub(r'[^a-z0-9]', '', name.lower())

def merge_data(existing_file, new_file):
    with open(existing_file, 'r') as f:
        existing = json.load(f)
    
    with open(new_file, 'r') as f:
        new_data = json.load(f)
        
    updated = {}
    
    # Sync IDs (plural/singular and hyphenation)
    # JS/JSON use specific keys
    key_map = {
        'musical-instruments': 'musical-instrument',
        'bags-footwear': 'bags-and-footwear',
        'kids-toddlers': 'kids-and-toddlers',
    }
    
    for key, new_subcats in new_data.items():
        # Map new key to existing key if necessary
        final_key = key_map.get(key, key)
        
        if final_key not in existing:
            # New category entirely? Keep as is from parser
            updated[final_key] = new_subcats
            continue
            
        existing_subcats = existing[final_key]
        merged_subcats = []
        
        for new_sc in new_subcats:
            # Find matching subcategory in existing data to preserve img/urls
            match = None
            new_norm = normalize_name(new_sc['name'])
            for ex_sc in existing_subcats:
                if normalize_name(ex_sc['name']) == new_norm:
                    match = ex_sc
                    break
            
            if match:
                # Merge: take name and items from new, img and urls from existing
                merged_sc = {
                    "name": new_sc['name'],
                    "img": match.get('img', new_sc['img']),
                    "topRatedUrl": match.get('topRatedUrl', "#"),
                    "sponsoredUrl": match.get('sponsoredUrl', "#"),
                    "items": new_sc['items']
                }
            else:
                # New subcategory in this category
                merged_sc = new_sc
            
            merged_subcats.append(merged_sc)
            
        updated[final_key] = merged_subcats
        
    # Also keep any categories that were in existing but not in new (if any)
    for key in existing:
        if key not in updated and key not in key_map.values():
            updated[key] = existing[key]
            
    return updated

if __name__ == "__main__":
    # First, let's fix the parse_categories.py to handle the key mapping better or just merge here
    merged = merge_data('subcategories_new.json', 'parsed_categories.json')
    with open('updated_subcategories.json', 'w') as f:
        json.dump(merged, f, indent=4)
    print("Merge complete")
