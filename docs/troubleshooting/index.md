# Troubleshooting

Common issues and solutions for DClaw API.

## Quick Diagnostics

```bash
# Check app pods
kubectl get pods -n dclaw-api

# Check logs
kubectl logs -n dclaw-api deployment/dclaw-api-backend

# Check database
kubectl get clusters -n dclaw-api
```

## Sections

- [Common Issues](./common-issues)
- [FAQ](./faq)
