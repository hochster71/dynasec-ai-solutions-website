
import json
import os

# Load marketplace JSON
with open('marketplace_with_features.json', 'r') as f:
    products = json.load(f)

alerts = []

# Scan for issues in each product
for product in products:
    title = product.get('title', 'Unknown')
    if not product.get('stripe_url', '').startswith('https://buy.stripe.com/'):
        alerts.append(f"Broken Stripe link: {title}")
    if not product.get('brief_url', '').startswith('/pdfs/') or not product.get('brief_url', '').endswith('.pdf'):
        alerts.append(f"Missing or invalid brief link: {title}")
    if not product.get('features'):
        alerts.append(f"No features listed: {title}")

# Simulate PDF file scan
pdf_dir = 'pdfs'
if os.path.exists(pdf_dir):
    brief_files = set(os.listdir(pdf_dir))
    for product in products:
        pdf_name = product.get('brief_url', '').replace('/pdfs/', '')
        if pdf_name and pdf_name not in brief_files:
            alerts.append(f"PDF file missing in repo: {pdf_name}")
else:
    alerts.append("PDF directory missing from repo")

# Load existing CIC data
with open('cic_ops_data.json', 'r') as f:
    cic_data = json.load(f)

# Update alert block
cic_data['ops']['alerts'] = {
    "summary": f"{len(alerts)} issue(s) detected",
    "details": alerts
}

# Write back updated CIC JSON
with open('cic_ops_data.json', 'w') as f:
    json.dump(cic_data, f, indent=2)

print(f"✅ Scan complete: {len(alerts)} alerts written to cic_ops_data.json")
